<template>
  <div :class="[color, 'py-1 px-5  w-fit rounded-lg hover:shadow-lg ']">
    <slot></slot>
  </div>
</template>

<script setup>
import { useSlots ,computed} from "vue";
const colorMap = {
  success: "bg-green-300 text-green-800 hover:bg-green-400",
  draft: "bg-orange-300 text-orange-800 hover:bg-orange-400",
  close: "bg-gray-300 text-gray-800 hover:bg-gray-400",
};
const slots = useSlots();

const children = slots.default()[0].children;
const color = computed(() => {
  return colorMap[children];
});
</script>
