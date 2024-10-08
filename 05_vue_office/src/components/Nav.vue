<template>
  <nav class="m-5">
    <ul class="flex">
      <li class="m-5">
        <button
          @click="() => updateCurrentTab('about')"
          :class="currentTab == 'about' ? 'bg-lime-600' : ''"
          class="border-2 border-lime-600 text-lime-900 px-4 py-2 text-lg rounded-md hover:bg-lime-600 hover:text-cream-300 transition-all"
        >
          About
        </button>
      </li>
      <li class="m-5">
        <button
          @click="() => updateCurrentTab('team')"
          :class="currentTab == 'team' ? 'bg-lime-600' : ''"
          class="border-2 border-lime-600 text-lime-900 px-4 py-2 text-lg rounded-md hover:bg-lime-600 hover:text-cream-300 transition-all"
        >
          Team
        </button>
      </li>
    </ul>
  </nav>
</template>

<script setup>

import { defineEmits } from "vue";

const props = defineProps(["currentTab"]);

const emit = defineEmits(["updateTab"]);

const updateCurrentTab = (newTab) => {
  emit("updateTab", newTab);
};
</script>
