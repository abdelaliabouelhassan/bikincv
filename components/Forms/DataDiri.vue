<template>
    <div class=" w-full">
        <div class=" w-full flex flex-col items-start space-y-4">
           <div class=" flex flex-col items-start space-y-2">
               <span class=" text-[15px] text-secondary font-medium font-montserrat">Deskripsi Diri</span>
                <div class=" w-full p-5 bg-background rounded-2xl">
                    <p class=" text-xs text-[#48494A52] italic font-medium font-montserrat">
                        <span class=" font-semibold">Ex :</span> Saya merupakan S1 Lulusan Ekonomi Universitas  _____. Seorang yang sangat teliti dalam hal pembukuan, serta memiliki sifat tanggung jawab dan berpengalaman dalam memecahkan masalah. Selama Kuliah saya aktif di organisasi ____ sebagai ketua, serta pernah memenangkan kompetisi ____. Kini sedang mencari kerja khususnya di bidang finance untuk membuka gerbang karir di sektor accounting.
                    </p>
                </div>
           </div>
            <Input label="Nama  Panggilan" v-model="form.NamaPanggilan"  />
            <Input label="Nama  Lengkap" v-model="form.NamaLengkap"/>
           <div class=" grid grid-cols-3 gap-x-4">
                 <Input label="Tempat Lahir" class=" col-span-2" v-model="form.TempatLahir"/>
                 <Input label="Tanggal Lahir" class=" col-span-1" v-model="form.TanggalLahir"/>
           </div>
             <SelectInput label="Agama" v-model="form.Agama" :options="[
             {lable:'Laki - Laki',value:'Laki - Laki'},
             {lable:'Perempuan',value:'Perempuan'}
             ]"/>
           <div class=" grid grid-cols-2 gap-x-4 w-full">
                  <SelectInput label="Jenis Kelamin" v-model="form.JenisKelamin" :options="[
             {lable:'Belum Menikah',value:'Belum Menikah'},
             {lable:'Menikah',value:'Menikah'}
             ]"/>
                  <SelectInput label="Status" v-model="form.Status" :options="[
             {lable:'Islam',value:'islam'},
             {lable:'Kristen - Katolik',value:'Kristen - Katolik'},
             {lable:'Kristen - Protestan',value:'Kristen - Protestan'},
             {lable:'Hindu',value:'Hindu'},
             {lable:'Buddha',value:'Buddha'},
             {lable:'Konghucu',value:'Konghucu'},
             ]"/>
           </div>
             <Input label="Kewarganegaraan" v-model="form.Kewarganegaraan" />
        </div>
    </div>
</template>


<script setup>
 import Input from '@/components/UI/Input.vue'
 import SelectInput from '@/components/UI/SelectInput.vue'
 const name = ref('');
 const agama = ref('');
 const form = ref({
        NamaPanggilan:'',
        NamaLengkap:'',
        TempatLahir:'',
        NamaLengkap:'',
        TanggalLahir:'',
        Agama:'',
        JenisKelamin:'',
        Status:'',
        Kewarganegaraan:''


 });
</script>