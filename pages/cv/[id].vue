<template>
    <Progress />

    <div class=" w-full px-5 pt-5 pb-32">
        <Foto v-if="step == 1"/>
        <DataDiri v-else-if="step == 2" />
        <Kemampuan v-else-if="step == 3"/>
        <Pendidikan v-else-if="step == 4"/>
        <PengalamanKerja v-else-if="step == 5"/>
        <Organisasi  v-else-if="step == 6"/>
        <Sertifikat v-else-if="step == 7"/>
        <Kontak v-else-if="step == 8 || step == 9"/>
    </div>
</template>


<script setup>
  import Progress from '@/components/UI/Progress.vue'
  import Foto from '@/components/Forms/Foto.vue'
  import DataDiri from '@/components/Forms/DataDiri.vue'
  import Kemampuan from '@/components/Forms/Kemampuan.vue'
  import Pendidikan from '@/components/Forms/Pendidikan.vue'
  import PengalamanKerja from '@/components/Forms/PengalamanKerja.vue'
  import Organisasi from '@/components/Forms/Organisasi.vue'
  import Sertifikat from '@/components/Forms/Sertifikat.vue'
  import Kontak from '@/components/Forms/Kontak.vue'
  import { usesteps } from "@/composables/states";

  const step = usesteps();
    onMounted(() => {
        step.value = 1;
    });

</script>