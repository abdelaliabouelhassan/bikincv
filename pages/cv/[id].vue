<template>
    <Progress />

    <div class=" w-full px-5 pt-5 pb-32">
        <Foto v-if="step == 1"/>
        <DataDiri v-else-if="step == 2" />
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
  import DataDiri from '@/components/Forms/DataDiri.vue'
  import { usesteps } from "@/composables/states";

  const step = usesteps();
    onMounted(() => {
        step.value = 1;
    });

</script>