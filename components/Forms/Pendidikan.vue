<template>
    <div class=" w-full  divide-y">
        <div class=" w-full flex flex-col items-start space-y-4 pb-8" :class="{'pt-8': index > 0}" v-for="(item,index,key) in form" :key="key">
            <span class=" text-[18.75px] font-medium font-montserrat text-secondary">Pendidikan #{{index + 1}}</span>
            <div class=" grid grid-cols-2 gap-x-4">
                <Input  label="Tahun Masuk" v-model="item.TahunMasuk" />
                <Input  label="Tahun Selesai" v-model="item.TahunSelesai"/>
            </div>
            <Input  label="Universitas / Sekolah" placeholder="Ex : Universitas Sumatera Utara" v-model="item.Universitas"/>
            <Input  label="Jurusan" placeholder="Ex : Ekonomi" v-model="item.Jurusan"/>
            <Input  label="Fakultas " placeholder="Ex : Ekonomi" v-model="item.Fakultas"/>
           <div class=" grid grid-cols-2 gap-x-4">
                <Input  label="Tilte" v-model="item.Title"/>
                <Input  label="Nilai Akhir ( IPK )" v-model="item.NilaiAkhir"/>
            </div>
        </div>

         <button @click="AddPendidikan" class=" bg-background p-3 rounded-xl hover:bg-opacity-75">
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
        Universitas:'',
        Jurusan:'',
        Fakultas:'',
        Title:'',
        NilaiAkhir:''

    }
 ])

 const AddPendidikan = () => {
    form.value.push({
        TahunMasuk:'',
        TahunSelesai:'',
        Universitas:'',
        Jurusan:'',
        Fakultas:'',
        Title:'',
        NilaiAkhir:''
    })
 }


</script>