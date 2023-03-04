<template>
   <VitePwaManifest />
    <AppLayout>
        <NuxtPage />
    </AppLayout>
</template>


<script>
import AppLayout from '~/layouts/AppLayout.vue'
export default {
  components: {
    AppLayout
  },
}
</script>


