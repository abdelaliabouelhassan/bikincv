<template>
    <div class=" w-full bg-white h-screen max-w-[375px] m-auto relative ">
       <div class=" w-full h-full">
         <slot />
       </div>
       <div class=" fixed bottom-10 px-10  inset-x-0  max-w-[400px]  m-auto">
            <Navigation />
       </div>
    </div>
</template>


<script>
import Navigation from '~/components/UI/Navigation.vue'
export default {
    components:{
        Navigation
    }
    
}
</script>