<template>
  <Nav :currentTab="currentTab" @updateTab="updateTab" />

  <About v-if="currentTab == 'about'" />

  <Team v-if="currentTab == 'team'" />

  <Confetti v-if="currentTab == 'confetti'" /> 

  <Counter v-if="currentTab == 'composable'" />
  
  <RouterView v-if="currentTab == 'routerView'" />

</template>

<script setup>
import { ref } from "vue";
import About from "./components/About.vue";
import Team from "./components/Team.vue";
import Nav from "./components/Nav.vue";
import Confetti from "./components/Confetti.vue";
import Counter from "./Pages/counter.vue";
import RouterView from "./Pages/RouterView.vue";

const currentTab = ref("about");

const updateTab = (newTab) => {
  currentTab.value = newTab;
};
</script>
