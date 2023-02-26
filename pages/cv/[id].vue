<template>
    <Progress />
</template>


<script setup>
  import Progress from '@/components/UI/Progress.vue'
  import { usesteps } from "@/composables/states";

  const step = usesteps();
    onMounted(() => {
        step.value = 1;
    });

</script>