<template>
    <div class=" w-full">
        <div class=" w-full flex flex-col items-start space-y-4 pb-8 border-b">
            <span class=" text-[18.75px] font-medium font-montserrat text-secondary">Kontak </span>
            <Input  label="No Telp / Whatsapp "  placeholder="Ex : 0812 1234 5678"/>
            <Input  label="E-mail "  placeholder="Ex : Username@gmail.com"/>
            <Input  label="Alamat"  placeholder="Ex : Kota / Kabupaten, Provinsi"/>
        </div>

         <div class=" w-full flex flex-col items-start space-y-4 py-8">
            <span class=" text-[18.75px] font-medium font-montserrat text-secondary">Social Media </span>
           <div class=" flex items-end space-x-4 w-full">
             <div class=" h-9">
                <InstagramIcon />
             </div>
             <Input  label="Instagram " />
           </div>
           <div class=" flex items-end space-x-4 w-full">
             <div class=" h-9">
                <LinkedinIcon />
             </div>
             <Input  label="Linked"  />
           </div>
        </div>

       
       
    </div>
</template>

<script setup>
 import Input from '@/components/UI/Input.vue'
 import InstagramIcon from '@/components/Icons/InstagramIcon.vue'
 import LinkedinIcon from '@/components/Icons/LinkedinIcon.vue'
 import { usesteps } from "@/composables/states";

 const step = usesteps();
 let time = ref(null);
    onMounted(() => {
    time = setTimeout(() => {
        step.value = 9;
    }, 1000);
    });

    onUnmounted(() => {
    clearTimeout(time);
    });

</script>