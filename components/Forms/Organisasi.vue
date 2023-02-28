<template>
    <div class=" w-full border-b">
        <div class=" w-full flex flex-col items-start space-y-4 pb-8">
            <span class=" text-[18.75px] font-medium font-montserrat text-secondary">Organisasi #1</span>
            <div class=" grid grid-cols-2 gap-x-4">
                <Input  label="Tahun Masuk" />
                <Input  label="Tahun Selesai"/>
            </div>
            <Input  label="Nama Perusahaan" placeholder="Ex : PT. Muda Sinergi Digital"/>
            <div class=" grid grid-cols-2 gap-x-4">
                <Input  label="Jabatan" placeholder="Ex : Manajer"/>
                <Input  label="Lokasi" placeholder="Ex : Medan"/>
            </div>
             <div class=" w-full p-5 bg-background rounded-2xl">
            <span class=" text-xs text-tertiary font-medium font-montserrat">Note :  </span>
           <p class=" text-xs text-tertiary font-medium font-montserrat">Tulis Deskripsi tugas dengan perpoint</p>
            <ol class=" list-decimal text-xs font-light text-primary font-montserrat pl-3 pt-2">
                <li>Lorem ipsum dolor sit amet consectetur</li>
                <li>Lorem ipsum dolor sit amet consectetur</li>
                 <li>Lorem ipsum dolor sit amet consectetur</li>
                  <li>Lorem ipsum dolor sit amet consectetur</li>
           
            </ol>
        </div>
        </div>
       
    </div>
</template>

<script setup>
 import Input from '@/components/UI/Input.vue'



</script>