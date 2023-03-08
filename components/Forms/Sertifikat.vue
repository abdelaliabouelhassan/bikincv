<template>
    <div class=" w-full">
        <div class=" w-full flex flex-col items-start space-y-4 pb-8 border-b" :class="{'pt-8': index > 0}" v-for="(item,index,key) in Sertifikat" :key="key">
            <span class=" text-[18.75px] font-medium font-montserrat text-secondary">Sertifikat #{{index + 1 }}</span>
            <div class=" grid grid-cols-3 gap-x-4">
                <Input type="number"  label="Tahun Masuk"   v-model="item.TahunMasuk"/>
                <Input  label="Penyelenggara" v-model="item.Penyelenggara" class=" col-span-2"/>
            </div>
            <Input  label="Nama Kegiatan" v-model="item.NamaKegiatan" placeholder="Ex : Pelatihan Akutansi Dasar"/>
        </div>

        <div class=" w-full pt-4">
             <button @click="AddSertifikat" class=" bg-background p-3 rounded-xl hover:bg-opacity-75">
                <PluseIcon />
            </button>
        </div>
       
    </div>
</template>

<script setup>
 import Input from '@/components/UI/Input.vue'
 import PluseIcon from '@/components/Icons/PluseIcon.vue'
 

const Sertifikat = ref([
    {
        TahunMasuk:'',
        Penyelenggara:'',
        NamaKegiatan:''
    },
    {
        TahunMasuk:'',
        Penyelenggara:'',
        NamaKegiatan:''
    }
])

 const AddSertifikat = () => {
        Sertifikat.value.push({
            TahunMasuk:'',
            Penyelenggara:'',
            NamaKegiatan:''
        })
 }

</script>