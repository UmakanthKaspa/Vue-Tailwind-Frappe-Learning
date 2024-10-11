<template>
  <Nav :currentTab="currentTab" @updateTab="updateTab" />

  <About v-if="currentTab == 'about'" />

  <Team v-if="currentTab == 'team'" />

  <Confetti v-if="currentTab == 'confetti'" />
</template>

<script setup>
import { ref } from "vue";
import About from "./components/About.vue";
import Team from "./components/Team.vue";
import Nav from "./components/Nav.vue";
import Confetti from "./components/Confetti.vue";

const currentTab = ref("about");

const updateTab = (newTab) => {
  currentTab.value = newTab;
};
</script>
