<template>
<div :class="[color, 'py-1 px-5  w-fit rounded-lg hover:shadow-lg ']">
    {{ status }}
</div>


</template>

<script setup>

import { computed } from 'vue';
const colorMap = {
    'success':'bg-green-300 text-green-800 hover:bg-green-400',
    'draft':'bg-orange-300 text-orange-800 hover:bg-orange-400',
    'close':'bg-gray-300 text-gray-800 hover:bg-gray-400',
}
const props = defineProps({
    status:String
})
const color  =  computed(()=>{
    return colorMap[props.status]
}) 
</script>