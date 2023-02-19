<template>
    <div class="  w-full rounded-[20px] bg-white p-4 space-y-4" >
        <div class=" border overflow-hidden border-[#F8F9FA] rounded-xl">
            <img :src="image" class=" w-full h-full" alt="">
        </div>
        <div class=" w-full flex items-center pl-4 justify-between">
            <div class=" flex flex-col items-start">
            <span class=" text-[11px] font-light text-primary font-montserrat">Code</span>
            <span class=" text-[13.5px] font-semibold text-primary font-montserrat">{{cvcode}}</span>
            </div>
            <button class=" text-[10px] font-montserrat font-medium text-white bg-tertiary rounded-lg px-4 py-2">
             Choose
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        cvcode: {
            type: String,
            default: '',
            required: true
        },
        image:{
            type: String,
            default: '',
            required: true
        }
    }
}
</script>