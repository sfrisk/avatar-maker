<template>
  <div class="dolphin">
    <AvatarMaker title="Dolphin Maker 2.0!" :options="dolphin" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AvatarMaker from "@/components/AvatarMaker";
import dolphin from "@/assets/dolphin/dolphin";

export default defineComponent({
  name: "Dolphin",
  components: {
    AvatarMaker,
  },
  data() {
    return {
      dolphin: dolphin,
    };
  },
});
</script>
