<template>
  <div class="avatar-maker">
    <h1>{{ title }}</h1>
    <div class="avatar-maker__content">
      <div class="avatar-maker__canvas">
        <canvas :height="height" :width="width" ref="canvas" />
        <p class="align-right"><em>Enjoy! &lt;3</em></p>
      </div>
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
        <div class="avatar-maker__section">
          <div class="avatar-maker__options">
            <button
              v-for="option in options"
              :key="option.name"
              :title="`${option.name} ${
                option.name === tab.name ? '(Selected)' : ''
              }`"
              :class="{ active: option.name === tab.name }"
              class="avatar-maker__option"
              @click="() => openTab(option)"
            >
              <img :src="option.url" :alt="option.name" />
            </button>
            <button
              class="avatar-maker__option"
              :class="{ active: tab === 'background' }"
              :style="{ background: color }"
              :title="`Background ${tab === 'background' ? '(Selected)' : ''}`"
              @click="() => openTab('background')"
            />
          </div>
        </div>
        <div v-if="tab === 'background'" class="avatar-maker__section">
          <h2>Background</h2>
          <ColorPicker :color="color" @changeColor="changeBackground" />
        </div>
        <div v-else class="avatar-maker__section">
          <h2>{{ tab.name }}</h2>
          <div v-if="variants" class="avatar-maker__options">
            <button
              v-for="item in tab.items"
              :key="item.name"
              :title="`${tab.name} - ${item.name}  ${
                variants.name === item.name ? '(Selected)' : ''
              }`"
              :class="{ active: variants.name === item.name }"
              class="avatar-maker__option"
              @click="setItem(item)"
            >
              <img :src="item.options[0].url" />
            </button>
          </div>
        </div>
        <div
          v-if="variants && variants.name !== 'None'"
          class="avatar-maker__section"
        >
          <div class="avatar-maker__variants">
            <h2>{{ variants.name }} Options</h2>
            <div v-if="variants.options.length > 1">
              <button
                v-for="v in variants.options"
                :key="v.name"
                :style="{ background: v.color }"
                :title="`${variants.name} ${v.name} ${
                  v.color === variant.color ? '(Selected)' : ''
                }`"
                :class="{ active: v.color === variant.color }"
                class="avatar-maker__variant"
                @click="() => setVariant(v)"
              />
            </div>
            <p v-if="variants.options.length === 1">
              Alternative options not available.
            </p>
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
        const variants =
          section.items[Math.floor(Math.random() * section.items.length)];
        const variant =
          variants.options[Math.floor(Math.random() * variants.options.length)];
        if (this.tab !== "background" && this.tab.name === section.name) {
          this.variants = variants;
          this.variant = variant;
        }
        avatar.push({
          name: section.name,
          variant: {
            name: variants.name,
            url: variant.url,
            x: variants.x,
            y: variants.y,
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
  @media (min-width: 768px) {
    max-width: none;
  }
  @media (min-width: 1200px) {
    max-width: 1215px;
  }
  button {
    cursor: pointer;
  }
  &__content {
    background: var(--primary001);
    padding: 1rem;
    @media (min-width: 768px) {
      display: flex;
    }
    @media (prefers-color-scheme: dark) {
      background: rgba(0, 0, 0, 0.5);
    }
  }
  &__customize {
    margin-top: 1rem;
    @media (min-width: 768px) {
      margin-top: 0;
      background: var(--primary003);
      flex: 1;
      margin-left: 1rem;
      padding: 1rem;
      max-width: 50%;
      overflow-x: hidden;
      @media (prefers-color-scheme: dark) {
        background: var(--primary001);
      }
    }
  }
  &__canvas {
    flex: 1;
    @media (prefers-color-scheme: dark) {
      color: var(--white);
    }
    @media (min-width: 768px) {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
    }
    p {
      padding: 1rem;
    }
    canvas {
      object-fit: scale-down;
      display: block;
      max-width: 100%;
      max-height: 100%;
      width: auto;
      height: auto;
      background: white;
      padding: 1rem;
      @media (prefers-color-scheme: dark) {
        background: var(--secondary002);
      }
    }
  }
  &__actions {
    display: flex;
    margin: 0 0 1rem;
    a,
    button {
      text-decoration: none;
      font-weight: bold;
      display: block;
      text-align: center;
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
      height: 70px;
      font-size: 1.2rem;
    }
  }
  &__random {
    background: var(--button__color);
    color: var(--button__bg);
    border: 4px solid var(--button__color);
    &:hover,
    &:active,
    &:focus {
      opacity: 0.8;
    }
    margin-right: 0.5rem;
  }
  &__save {
    margin-left: 0.5rem;
    background: var(--button__bg);
    color: var(--button__color);
    border: 4px solid var(--button__border);
    &:hover,
    &:active,
    &:focus {
      opacity: 0.8;
    }
  }
  &__section {
    background: var(--white);
    @media (prefers-color-scheme: dark) {
      background: rgba(0, 0, 0, 0.5);
    }
    margin: 1rem 0;
    padding: 1rem 0.5rem 0;
    h2 {
      margin: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
  &__options {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0.5rem 0;
    max-width: 100%;
  }
  &__option {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 70px;
    width: 70px;
    margin: 0 0.5rem 1rem;
    background: white;
    border: 4px solid white;
    @media (prefers-color-scheme: dark) {
      background: var(--secondary002);
      border: 4px solid var(--secondary002);
    }
    &.active {
      border: 4px solid var(--secondary002);
      @media (prefers-color-scheme: dark) {
        border: 4px solid var(--white);
      }
    }
    &:focus,
    &:active {
      border: 4px solid var(--secondary001);
      outline: none;
      @media (prefers-color-scheme: dark) {
        border: 4px solid var(--primary003);
      }
    }
    &::-moz-focus-inner {
      border: 0;
    }
    img {
      height: auto;
      width: auto;
      max-width: 50px;
      max-height: 50px;
    }
  }
  &__variant {
    height: 50px;
    width: 50px;
    border-radius: 100%;
    background: white;
    margin: 0 0.5rem 1rem;
    background: white;
    border: 4px solid white;
    @media (prefers-color-scheme: dark) {
      background: var(--secondary002);
      border: 4px solid var(--secondary002);
    }
    &.active {
      border: 4px solid var(--primary002);
      @media (prefers-color-scheme: dark) {
        border: 4px solid var(--white);
      }
    }
    &:focus,
    &:active {
      border: 4px solid var(--secondary001);
      outline: none;
      @media (prefers-color-scheme: dark) {
        border: 4px solid var(--primary003);
      }
    }
    &::-moz-focus-inner {
      border: 0;
    }
  }
  .hu-color-picker {
    box-sizing: content-box;
    margin: 0 auto;
  }
}
</style>
