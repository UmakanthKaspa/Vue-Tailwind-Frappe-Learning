<template>
  <nav class="m-5">

    <ul class="flex">
      <li v-for="tab in tabs" class="m-5">
        <button @click="() => updateCurrentTab(tab.value)" :class="currentTab == tab.value ? 'bg-lime-600' : ''"
          class="border-2 border-lime-600 text-lime-900 px-4 py-2 text-lg rounded-md hover:bg-lime-600 hover:text-cream-300 transition-all">
          {{tab.title   }}
        </button>
      </li>
    </ul>

  </nav>
</template>

<script setup>
import { defineEmits } from "vue";

const tabs = [
  {
    title: "About",
    value: "about"
  },
  {
    title: "Team",
    value: "team"
  },
  {
    title: "Confetti",
    value: "confetti"
  },
  {
    title: "Composable",
    value: "composable"
  },
  {
    title: "RouterView",
    value: "routerView"
  }

]

const props = defineProps(["currentTab"]);

const emit = defineEmits(["updateTab"]);

const updateCurrentTab = (newTab) => {
  emit("updateTab", newTab);
};
</script>
