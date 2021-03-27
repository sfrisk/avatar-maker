<template>
  <div class="avatar-maker">
    <h1>{{ title }}</h1>
    <div class="avatar-maker__content">
      <canvas
        class="avatar-maker__canvas"
        :height="height"
        :width="width"
        ref="canvas"
      />
      <div class="avatar-maker__customize">
        <div class="avatar-maker__actions">
          <button class="avatar-maker__random" @click="randomize">
            Random!
          </button>
          <a
            class="avatar-maker__save"
            href="#"
            download="avatar.png"
            @click="saveImage"
            ref="saveAvatar"
          >
            Download Image
          </a>
        </div>
        <div class="avatar-maker__tabs">
          <button
            v-for="option in options"
            :key="option.name"
            :title="option.name"
            :class="{ active: option.name === tab.name }"
            class="avatar-maker__tab"
            @click="() => openTab(option)"
          >
            <img :src="option.url" :alt="option.name" />
          </button>
          <button
            class="avatar-maker__tab"
            :class="{ active: tab === 'background' }"
            :style="{ background: color }"
            title="Background"
            @click="() => openTab('background')"
          />
        </div>
        <div v-if="tab === 'background'" class="avatar-maker__section">
          <h2>Background</h2>
          <ColorPicker :color="color" @changeColor="changeBackground" />
        </div>
        <div v-else class="avatar-maker__section">
          <h2>{{ tab.name }}</h2>
          <div
            v-if="variants && variants.options.length > 1"
            class="avatar-maker__variants"
          >
            <h3>Colors</h3>
            <button
              v-for="v in variants.options"
              :key="v.color"
              :style="{ background: v.color }"
              :class="{ active: v.color === variant.color }"
              class="avatar-maker__variant"
              @click="() => setVariant(v)"
            />
          </div>
          <div v-if="variants" class="avatar-maker__options">
            <button
              v-for="item in tab.items"
              :key="item.name"
              :title="`${tab.name} ${item.name}`"
              :class="{ active: variants.name === item.name }"
              class="avatar-maker__option"
              @click="setItem(item)"
            >
              <img :src="item.options[0].url" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import ColorPicker from "@caohenghu/vue-colorpicker";
import {
  AvatarItem,
  Color,
  AvatarSelection,
  CustomizableItem,
  CustomizableItemOptions,
} from "./AvatarMaker.types";

export default defineComponent({
  name: "AvatarMaker",
  components: {
    ColorPicker,
  },
  props: {
    options: {
      type: Object as PropType<AvatarItem[]>,
      required: true,
      default: [],
    },
    width: {
      type: Number,
      required: false,
      default: 1200,
    },
    height: {
      type: Number,
      required: false,
      default: 1200,
    },
    title: {
      type: String,
      default: "Avatar Maker",
    },
  },
  data() {
    return {
      color: "",
      canvas: null as CanvasRenderingContext2D | null,
      avatar: [] as AvatarSelection[],
      tab: this.options[0] as AvatarItem | "background",
      variants: this.options[0].items[0] as CustomizableItem | null,
      variant: this.options[0].items[0]
        .options[0] as CustomizableItemOptions | null,
    };
  },
  mounted() {
    const canvas = this.$refs.canvas as HTMLCanvasElement;
    this.canvas = canvas.getContext("2d");
    this.randomize();
  },
  methods: {
    changeBackground(color: Color) {
      const { r, g, b, a } = color.rgba;
      this.color = `rgba(${r}, ${g}, ${b}, ${a})`;
      this.drawImage();
    },
    async drawImage() {
      if (this.canvas) {
        const canvas = this.canvas;
        canvas.fillStyle = this.color;
        canvas.fillRect(0, 0, this.width, this.height);
        let promiseImages: Promise<void>[] = [];
        let images: {
          image: HTMLImageElement;
          variant: AvatarSelection["variant"];
        }[] = [];
        for (const option of this.avatar) {
          promiseImages.push(
            new Promise((resolve) => {
              const image = new Image();
              image.onload = function () {
                resolve();
              };
              image.src = option.variant.url;
              images.push({ image: image, variant: option.variant });
            })
          );
        }
        await Promise.all(promiseImages).then(() => {
          images.forEach((item) => {
            canvas.drawImage(item.image, item.variant.x, item.variant.y);
          });
        });
      }
    },
    randomize() {
      let avatar: AvatarSelection[] = [];
      this.options.forEach((section) => {
        const option =
          section.items[Math.floor(Math.random() * section.items.length)];
        const variant =
          option.options[Math.floor(Math.random() * option.options.length)];
        avatar.push({
          name: section.name,
          variant: {
            name: option.name,
            url: variant.url,
            x: option.x,
            y: option.y,
          },
        });
      });
      this.avatar = avatar;
      this.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      this.drawImage();
    },
    saveImage() {
      const canvas = this.$refs.canvas as HTMLCanvasElement;
      const dataURL = canvas.toDataURL("image/png");
      const link = this.$refs.saveAvatar as HTMLLinkElement;
      link.href = dataURL;
    },
    setItem(item: CustomizableItem) {
      if (this.tab !== "background") {
        const name = this.tab.name;
        this.variants = item;
        let avatar: AvatarSelection[] = [];
        this.avatar.forEach((section) => {
          if (section.name != name) {
            avatar.push(section);
          } else {
            this.variant = item.options[0];
            avatar.push({
              name: name,
              variant: {
                name: item.name,
                x: item.x,
                y: item.y,
                url: item.options[0].url,
              },
            });
          }
        }, this);
        this.avatar = avatar;
        this.drawImage();
      }
    },
    setVariant(variant: CustomizableItemOptions) {
      this.variant = variant;
      if (this.tab === "background") {
        return;
      }
      let avatar: AvatarSelection[] = [];
      this.avatar.forEach((section) => {
        if (this.tab === "background") {
          return;
        }
        if (section.name != this.tab.name) {
          avatar.push(section);
        } else {
          if (this.variant && this.variants) {
            avatar.push({
              name: this.tab.name,
              variant: {
                name: this.variants.name,
                x: this.variants.x,
                y: this.variants.y,
                url: variant.url,
              },
            });
          }
        }
      }, this);
      this.avatar = avatar;
      this.drawImage();
    },
    openTab(tab: AvatarItem | "background") {
      this.tab = tab;
      if (tab !== "background") {
        const item = this.avatar.find((setting) => setting.name === tab.name);
        if (item) {
          const variants = tab.items.find(
            (options) => options.name === item.variant.name
          );
          if (variants) {
            const variant = variants.options.find(
              (v) => item.variant.url === v.url
            );
            if (variant) {
              this.variant = variant;
              this.variants = variants;
              return;
            }
          }
        }
      }
      this.variants = null;
      this.variant = null;
    },
  },
});
</script>

<style scoped lang="scss">
.avatar-maker {
  max-width: 500px;
  margin: 1rem auto;
  padding: 1rem;
  background: white;
  @media (min-width: 768px) {
    max-width: 1200px;
  }
  button {
    cursor: pointer;
  }
  &__content {
    @media (min-width: 768px) {
      display: flex;
    }
  }
  &__customize {
    @media (min-width: 768px) {
      flex: 1;
      margin-left: 1rem;
      background: #bbbbbb;
      padding: 1rem;
    }
  }
  &__canvas {
    object-fit: scale-down;
    display: block;
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    @media (min-width: 768px) {
      max-width: 50%;
      max-height: 50%;
      flex: 1;
    }
  }
  &__actions {
    display: flex;
    padding: 1rem 0;
    a,
    button {
      flex: 1;
      border: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
      height: 70px;
      border-radius: 4px;
      text-decoration: none;
      font-size: 1.5rem;
      text-decoration: none;
    }
  }
  &__random {
    background: #6f34cd;
    color: white;
    margin-right: 0.5rem;
    &:hover,
    &:focus {
      background: #622cb5;
    }
  }
  &__save {
    margin-left: 0.5rem;
    background: #1a8510;
    color: white;
    &:hover,
    &:focus {
      background: #17780f;
    }
  }
  &__tabs {
    display: flex;
    overflow-x: scroll;
    max-width: 100%;
    align-items: center;
    justify-content: flex-start;
    background: #ddd;
    padding: 0.5rem 0;
  }
  &__tab {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 70px;
    width: 70px;
    margin: 0 3px;
    background: #eee;
    border: 1px solid #ddd;
    img {
      height: auto;
      width: auto;
      max-width: 50px;
      max-height: 50px;
    }
    &.active {
      border: 1px solid blue;
    }
  }
  &__section {
    border-radius: 4px;
    background: #ddd;
    margin: 0.5rem 0;
    h2 {
      margin: 0;
      padding: 0.5rem;
    }
  }
  &__options {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 0.5rem 0;
  }
  &__option {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 70px;
    width: 70px;
    margin: 0 3px;
    background: #eee;
    border: 2px solid #ddd;
    img {
      height: auto;
      width: auto;
      max-width: 50px;
      max-height: 50px;
    }
    &.active {
      border: 2px solid blue;
    }
  }
  &__variant {
    height: 50px;
    width: 50px;
    border-radius: 100%;
    border: 2px solid #ddd;
    &.active {
      border: 2px solid blue;
    }
  }
  .hu-color-picker {
    box-sizing: content-box;
    margin: 0 auto;
  }
}
</style>
