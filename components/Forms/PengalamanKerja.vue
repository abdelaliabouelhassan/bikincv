<template>
    <div class=" w-full  divide-y">
        <div class=" w-full flex flex-col items-start space-y-4 pb-8" :class="{'pt-8': index > 0}" v-for="(item,index,key) in form" :key="key">
            <span class=" text-[18.75px] font-medium font-montserrat text-secondary">Pekerjaan #{{index + 1}}</span>
            <div class=" grid grid-cols-2 gap-x-4">
                <Input type="number"  label="Tahun Masuk" v-model="item.TahunMasuk" />
                <Input type="number" label="Tahun Selesai" v-model="item.TahunSelesai"/>
            </div>
            <Input  label="Nama Perusahaan" placeholder="Ex : PT. Muda Sinergi Digital" v-model="item.NamaPerusahaan"/>
            <div class=" grid grid-cols-2 gap-x-4">
                <Input  label="Jabatan" placeholder="Ex : Manajer" v-model="item.Jurusan"/>
                <Input  label="Lokasi" placeholder="Ex : Medan" v-model="item.Lokasi"/>
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

         <button @click="AddPekerjaan" class=" bg-background p-3 rounded-xl hover:bg-opacity-75">
                <PluseIcon />
         </button>
       
    </div>
</template>

<script setup>
 import Input from '@/components/UI/Input.vue'
   import PluseIcon from '@/components/Icons/PluseIcon.vue'

 const form = ref([
    {
        TahunMasuk:'',
        TahunSelesai:'',
        NamaPerusahaan:'',
        Jurusan:'',
        Lokasi:'',

    }
 ])

 const AddPekerjaan = () => {
    form.value.push({
        TahunMasuk:'',
        TahunSelesai:'',
        NamaPerusahaan:'',
        Jurusan:'',
        Lokasi:''
    })
 }

</script>