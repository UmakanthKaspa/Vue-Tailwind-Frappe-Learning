<template>
    <div class="h-screen bg-red-100 flex flex-col justify-center items-center">
        <h1 class="text-3xl font-bold text-red-800 mb-4">Counter App</h1>
        <p class="text-5xl font-semibold text-gray-800 mb-6">{{ count }}</p>
        <div class="space-x-5">
            <button @click="increment()"
                class="bg-green-400 text-green-800 py-4 px-8 rounded-md hover:bg-green-500 hover:text-green-900 transition duration-300">Increment</button>
            <button @click="reset()"
                class="bg-gray-400 text-gray-800 py-4 px-8 rounded-md hover:bg-gray-500 hover:text-gray-900 transition duration-300">Rest</button>
            <button @click="decrement()"
                class="bg-red-400 text-red-800 py-4 px-8 rounded-md hover:bg-red-500 hover:text-red-900 transition duration-300">Decrement</button>
        </div>
    </div>
</template>


<script setup>

import { useCounter } from '@/composables/counter';
const { count, increment, decrement, reset } = useCounter()


</script>