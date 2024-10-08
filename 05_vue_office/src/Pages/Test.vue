<template>
  <div class="m-5 space-y-2">
    <Badge status="draft" />
    <Badge status="success" />
    <Badge status="close" />
  </div>
  <div class="m-5 space-y-2">
    <Badge1>draft</Badge1>
    <Badge1>success</Badge1>
    <Badge1>close</Badge1>
  </div>
  <ul v-if="data">
    <Item v-for="item in data" :name="item.full_name" :image="item.image" />
  </ul>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Item from "@/components/Item.vue";
import Badge from "@/components/Badge.vue";
import Badge1 from "@/components/Badge1.vue";

const data = ref(null);
const api = "https://platform.buildwithhussain.dev/api/method/get-office";
onMounted(() => {
  fetch(api)
    .then((response) => response.json())
    .then((d) => {
      data.value = d.data;
    });
});

// const formattedData = computed(() => {
//   return data.value ? JSON.stringify(data.value, null, 2) : 'Loading...';
// });
</script>
