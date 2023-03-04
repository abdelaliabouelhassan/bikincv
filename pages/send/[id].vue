<template>
    <div class=" w-full">
        <!-- Header -->
        <div class=" w-full bg-background p-4 space-y-8" style="box-shadow: 0px 2px 20px rgba(79, 79, 79, 0.2);">

            <div class=" w-full flex flex-col items-center space-y-4">
                <span class=" text-[#4A4E69] font-aldrich text-[29.66px] font-normal text-center">Pesan Saya</span>
                <div class=" w-full flex items-center space-x-8">
                    <div class=" w-full max-w-[126.77px] h-[180px] bg-gray-300 rounded-xl overflow-hidden">
                        <img src="/images/cv4.svg" class=" w-full" alt="">
                    </div>

                    <div class=" w-full flex flex-col items-start space-y-2 max-w-[164px]">
                        <div class=" w-full flex flex-col items-start space-y-1">
                            <span class=" text-xs text-secondary font-montserrat">Tampalate</span>
                            <Input  type="text" background=" bg-white h-[32px] rounded-lg" v-model="form.Tampalate" />
                        </div>
                         <div class=" w-full flex flex-col items-start space-y-1">
                            <span class=" text-xs text-secondary font-montserrat">Paket</span>
                            <Input type="text" background=" bg-white  h-[32px] rounded-lg" v-model="form.Paket"/>
                        </div>
                         <div class=" w-full flex flex-col items-start space-y-1">
                            <span class=" text-xs text-secondary font-montserrat">Bahasa</span>
                            <SelectInput arrow="right-4 top-2" background=" bg-white  h-[32px] rounded-lg px-3 py-1" v-model="form.Bahasa" :options="[
                                                                                    {lable:'Indonesia',value:'indonesia'},
                                                                                    {lable:'Inggris',value:'inggris'},
                                                                                     ]" />
                        </div>
                    </div>     
                </div>
            </div>

            <div class=" w-full flex items-center justify-between">
               <div class=" flex items-center space-x-3">
                <div>
                    <input type="radio"  class=" w-6 h-6" v-model="form.selected" :checked="form.selected">
                </div>
                 <div class=" text-[9.6px] font-montserrat text-primary font-light">
                    Saya telah membaca dan <br> menyetujui seluruh Syarat dan <br> Ketentuan Bikin.cv
                </div>
               </div>
                <button @click="Next" :disabled="!form.selected" :class="{' text-primary bg-white border border-tertiary':!form.selected,'text-white bg-tertiary':form.selected}"   class=" text-[18.75px] font-montserrat font-semibold text-center  w-[134px] h-[38px] rounded-xl hover:bg-opacity-70">NEXT</button>
            </div>
        </div>

        <!-- Body -->


        <div class=" w-full p-4 space-y-2">
            <span class=" text-secondary font-montserrat font-semibold text-[18.75px] ">Syarat dan Ketentuan</span>
             <ul class="list-disc text-xs font-light text-primary font-montserrat pl-5">
                <li>Pengerjaan CV di lakukan setelah kakak berhasil melakukan pembayaran.</li>
                <li>Proses pengerjaan Max 1 x 24 jam.</li>
                <li>Proses pengerjaan menggunakan paket <br> Standart + Max 4 jam. </li>
                <li>Proses pengerjaan menurut antrian. </li>
                <li>Kami akan menghubungi kakak jika akan segera <br> mengerjakan CV kakak.</li>
                <li>Jika kakak tidak melakukan pembayaran selama <br> 2 hari setelah  pengiriman data  CV kakak,  <br> kami akan mengganggap pesan kakak di batalkan.</li>
                <li>Kami akan mengirim hasil CV setelah kakak <br> Menyetujui Design dan Isian CV sudah sesuai.</li>
                <li>Untuk perubahan paket atau data,  kakak bisa langsung hubungin admin bikin.cv </li>
           
            </ul>
        </div>


    </div>
</template>


<script setup>
 import { usesteps } from "@/composables/states";
 import Input from '~/components/UI/Input.vue'
 import SelectInput from '~/components/UI/SelectInput.vue'
 const router = useRouter()
 const step = usesteps()
 const form = ref(
    {
         Tampalate: 'BCV-020',
         Paket: 'Standart',
         Bahasa: 'indonesia',
         selected:false,
    }
    )
 onMounted(() => {
     step.value = 11;
 })

 const Next = () => {
        router.push('/buy-now/' + router.currentRoute.value.params.id)
 }
</script>