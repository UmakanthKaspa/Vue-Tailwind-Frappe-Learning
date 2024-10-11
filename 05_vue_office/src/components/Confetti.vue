<template>
  <div class="m-5">
    <button
      @click="showConfetti"
      class="bg-gray-800 text-gray-400 px-5 py-3 rounded-md hover:bg-gray-600"
    >
      confetti
    </button>
  </div>
</template>

<script setup>
import confetti from "canvas-confetti";
var scalar = 2;
var pineapple = confetti.shapeFromText({ text: "🍍", scalar });

function showConfetti() {
//   confetti({
//     shapes: [pineapple],
//     scalar,
//   });
  confetti({
    particleCount: 100,
    startVelocity: 30,
    spread: 360,
    origin: {
      x: Math.random(),
      y: Math.random() - 0.2,
    },
  });
}
</script>
