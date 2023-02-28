<template>
    <div class=" w-full  divide-y">
        <div class=" w-full flex flex-col items-start space-y-4 pb-8">
            <span class=" text-[18.75px] font-medium font-montserrat text-secondary">Pendidikan #1</span>
            <div class=" grid grid-cols-2 gap-x-4">
                <Input  label="Tahun Masuk" />
                <Input  label="Tahun Selesai"/>
            </div>
            <Input  label="Universitas / Sekolah" placeholder="Ex : Universitas Sumatera Utara"/>
            <Input  label="Jurusan" placeholder="Ex : Ekonomi"/>
            <Input  label="Fakultas " placeholder="Ex : Ekonomi"/>
           <div class=" grid grid-cols-2 gap-x-4">
                <Input  label="Tilte" />
                <Input  label="Nilai Akhir ( IPK )"/>
            </div>
        </div>
        <div class=" w-full flex flex-col items-start space-y-4 py-8">
            <span class=" text-[18.75px] font-medium font-montserrat text-secondary">Pendidikan #2</span>
            <div class=" grid grid-cols-2 gap-x-4">
                <Input  label="Tahun Masuk" />
                <Input  label="Tahun Selesai"/>
            </div>
            <Input  label="Universitas / Sekolah" placeholder="Ex : Universitas Sumatera Utara"/>
            <Input  label="Jurusan" placeholder="Ex : Ekonomi"/>
            <Input  label="Fakultas " placeholder="Ex : Ekonomi"/>
           <div class=" grid grid-cols-2 gap-x-4">
                <Input  label="Tilte" />
                <Input  label="Nilai Akhir ( IPK )"/>
            </div>
        </div>
        
    </div>
</template>

<script setup>
 import Input from '@/components/UI/Input.vue'



</script>