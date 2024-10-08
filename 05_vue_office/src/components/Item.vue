<template>
  <li>
    <span>{{ name }}</span>
    <img :src="image" alt="" style="height: 100px; display: block" />
  </li>
</template>

<script setup>
const props = defineProps({
  name: String,
  image: String,
});
</script>
