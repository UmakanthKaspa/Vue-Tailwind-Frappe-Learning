<template>
  <div class="m-5">
    <h2 class="font-semibold text-slate-900 text-xl">Our Team</h2>
    <p class="italic text-lg text-slate-700">These people are our assets.</p>
    <ul v-if="data" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        <Item v-for="item in data" :name="item.full_name" :image="item.image" />
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Item from "./Item.vue";

const data = ref(null);
const api = "https://platform.buildwithhussain.dev/api/method/get-office";
onMounted(() => {
  fetch(api)
    .then((response) => response.json())
    .then((d) => {
      data.value = d.data;
    });
});
</script>
