<template>
    <div class=" w-full flex  justify-between items-start bg-white px-8 rounded-2xl navi pb-4 ">
        <button class=" flex flex-col items-center space-y-4">
            <div class=" w-[28px] h-[6px] bg-[#4A4E69] active "></div>
            <PintIcon class="  text-[#D9D9D9] "  />
        </button>
         <button class=" flex flex-col items-center space-y-4">
            <div class=" w-[28px] h-[6px] bg-[#4A4E69] active invisible"></div>
            <BookIcon class="  text-[#D9D9D9] "  />
        </button>
         <button class=" flex flex-col items-center space-y-4">
            <div class=" w-[28px] h-[6px] bg-[#4A4E69] active invisible"></div>
            <WalletIcon class="  text-[#D9D9D9] "  />
        </button>
         <button class=" flex flex-col items-center space-y-4">
            <div class=" w-[28px] h-[6px] bg-[#4A4E69] active invisible"></div>
            <ShopIcon class="  text-[#D9D9D9] "  />
        </button>
    </div>
</template>


<script>
import PintIcon from '~/components/Icons/PintIcon.vue'
import BookIcon from '~/components/Icons/BookIcon.vue'
import WalletIcon from '~/components/Icons/WalletIcon.vue'
import ShopIcon from '~/components/Icons/ShopIcon.vue'
export default {
    components:{
        PintIcon,
        BookIcon,
        WalletIcon,
        ShopIcon
    }
    
}
</script>


