<template>
    <div class=" w-full">
        <!-- header -->
        <Features :PriceList="PriceList" />

        <!-- price list -->

        <div class=" w-full flex flex-col items-start space-y-4 py-8">
            <span class=" text-[18.75px] text-secondary font-medium font-montserrat">Pricelist</span>
            <div class=" w-full grid grid-cols-2 gap-4"  >
                <PriceCard  v-for="(item,index,key) in PriceList" :key="key" :title="item.title" :price="item.price" v-model="item.selected" :index="index"  @update:selected="updateValue" />
            </div>
        </div>
    </div>
</template>

<script setup>
 import PriceCard from '@/components/UI/PriceCard.vue'
 import { usesteps } from "@/composables/states";
 import Features from '~/components/UI/features.vue'

 const step = usesteps();
  onMounted(() => {
        step.value = 10;
  })

 const PriceList = ref([
     {
         price: '145.000',
         title: 'Premium',
         selected: false,
         features:6, // features amount
         colored:6, // colored features index
     },
       {
         price: '100.000',
         title: 'Standart +',
         selected: false,
         features:5,
         colored:1,
     },
       {
         price: '25.000',
         title: 'Basic',
         selected: false,
         features:3,
         colored:0, // 0 means no colored features
     },
       {
         price: '50.000',
         title: 'Standart',
         selected: true,
         features:5,
         colored:0,
     },
 ])

    const updateValue = (event) => {
        PriceList.value.forEach((item) => {
            item.selected = false
        })
        PriceList.value[event.index].selected = event.value
    }


   
    
</script>
