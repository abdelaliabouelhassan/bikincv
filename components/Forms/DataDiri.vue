<template>
    <div class=" w-full">
        <div class=" w-full flex flex-col items-start space-y-4">
           <div class=" flex flex-col items-start space-y-2 w-full">
               <span class=" text-[15px] text-secondary font-medium font-montserrat">Deskripsi Diri</span>  
               <textarea name="" id=""  rows="8" class="  w-full p-5  rounded-2xl outline-none text-xs text-[#48494A52] italic font-medium font-montserrat bg-background"></textarea>
           </div>
            <Input label="Nama  Panggilan" v-model="form.NamaPanggilan"  />
            <Input label="Nama  Lengkap" v-model="form.NamaLengkap"/>
           <div class="  w-full">
                 <Input label="Tempat Lahir"  v-model="form.TempatLahir"/>
                
           </div>
            <div class=" w-full flex flex-col items-start space-y-2">
                     <span  class=" text-xs text-secondary font-normal font-montserrat">tanggal lahir</span>
                   <div class=" w-full p-1 rounded-xl bg-background">
                     <VueDatePicker v-model="form.TanggalLahir" :enable-time-picker="false"></VueDatePicker>
                   </div>
                 </div>
            <SelectInput label="Agama" v-model="form.Status" :options="[
             {lable:'Islam',value:'islam'},
             {lable:'Kristen - Katolik',value:'Kristen - Katolik'},
             {lable:'Kristen - Protestan',value:'Kristen - Protestan'},
             {lable:'Hindu',value:'Hindu'},
             {lable:'Buddha',value:'Buddha'},
             {lable:'Konghucu',value:'Konghucu'},
             ]"/>
            
           <div class=" grid grid-cols-2 gap-x-4 w-full">
              <SelectInput label="Jenis Kelamin" v-model="form.Agama" :options="[
                {lable:'Laki - Laki',value:'Laki - Laki'},
                {lable:'Perempuan',value:'Perempuan'}
                ]"/>
             <SelectInput label="Status" v-model="form.JenisKelamin" :options="[
                {lable:'Belum Menikah',value:'Belum Menikah'},
                {lable:'Menikah',value:'Menikah'}
                ]"/>

            
           
           </div>
             <Input label="Kewarganegaraan" v-model="form.Kewarganegaraan" />
        </div>
    </div>
</template>


<script setup>
 import Input from '@/components/UI/Input.vue'
 import SelectInput from '@/components/UI/SelectInput.vue'
 import VueDatePicker from '@vuepic/vue-datepicker';
 import '@vuepic/vue-datepicker/dist/main.css'

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


<style scoped>
.dp__theme_light {
    --dp-background-color: #F8F9FA;
    --dp-text-color: #4F4F4F;
    --dp-hover-color: #f3f3f3;
    --dp-hover-text-color: #212121;
    --dp-hover-icon-color: #959595;
    --dp-primary-color: #F28F8F !important;
    --dp-primary-text-color: #f8f5f5;
    --dp-secondary-color: #c0c4cc;
    --dp-border-color: none;
    --dp-menu-border-color: #ddd;
    --dp-border-color-hover: #aaaeb7;
    --dp-disabled-color: #f6f6f6;
    --dp-scroll-bar-background: #f3f3f3;
    --dp-scroll-bar-color: #959595;
    --dp-success-color: #F28F8F !important;
    --dp-success-color-disabled: #dc7878 !important;
    --dp-icon-color: #959595;
    --dp-danger-color: #ff6f60;
    --dp-highlight-color: rgba(25, 118, 210, 0.1);
 }
</style>