<template>
    <div class=" w-full flex  justify-between items-start bg-white px-8 rounded-2xl navi pb-4 ">
        <button @click="setStep(0)" class=" flex flex-col items-center space-y-4">
            <div class=" w-[28px] h-[6px] bg-[#4A4E69] active " :class="{'invisible':step > 1}"></div>
            <PintIcon :class="{'text-[#4A4E69]':step >= 1,'text-[#D9D9D9]':step < 1}"  />
        </button>
         <button @click="setStep(1)" class=" flex flex-col items-center space-y-4">
            <div class=" w-[28px] h-[6px] bg-[#4A4E69] active " :class="{' invisible':step <= 1 || step > 9 }"></div>
            <BookIcon :class="{'text-[#4A4E69]': step > 9,'text-[#D9D9D9]':step >= 0 && step <= 9}"  />
        </button>
         <button @click="setStep(2)" class=" flex flex-col items-center space-y-4">
            <div class=" w-[28px] h-[6px] bg-[#4A4E69] active" :class="{' invisible':step <= 9 || step > 10 }"></div>
            <WalletIcon :class="{'text-[#4A4E69]': step > 10,'text-[#D9D9D9]':step >= 0 && step <= 10}"   />
        </button>
         <button @click="setStep(3)" class=" flex flex-col items-center space-y-4">
            <div class=" w-[28px] h-[6px] bg-[#4A4E69] active" :class="{' invisible':step <= 10 || step > 12 }"></div>
            <ShopIcon :class="{'text-[#4A4E69]': step > 11,'text-[#D9D9D9]':step >= 0 && step <= 11}"   />
        </button>
    </div>
</template>


<script setup>
import PintIcon from '~/components/Icons/PintIcon.vue'
import BookIcon from '~/components/Icons/BookIcon.vue'
import WalletIcon from '~/components/Icons/WalletIcon.vue'
import ShopIcon from '~/components/Icons/ShopIcon.vue'
import { usesteps } from "@/composables/states";
const step = usesteps();
const router = useRouter();
const setStep = (go) => {
  if (go == 0) {
    if(step.value >= 1){
         step.value = 0;
         router.back();
    }
  }
  else if(go == 1){
    if(step .value> 9){
         step.value = 1;
    }
  }

};
    
</script>


