<template>
    <Progress />

    <div class=" w-full p-5">
        <Foto v-if="step == 1"/>
        <div v-else>
            <span class=" text-xl text-center font-montserrat">
                Coming soon ...
            </span>
        </div>

    </div>
</template>


<script setup>
  import Progress from '@/components/UI/Progress.vue'
  import Foto from '@/components/Forms/Foto.vue'
  import { usesteps } from "@/composables/states";

  const step = usesteps();
    onMounted(() => {
        step.value = 1;
    });

</script>