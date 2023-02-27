<template>
    <div class=" w-full bg-background p-5" style="box-shadow: 0px 2px 20px rgba(79, 79, 79, 0.2);">
        <div class=" w-full flex items-start justify-between h-full">
            <div class=" max-w-[212px] w-full px-5 py-3 bg-white rounded-[18px] space-y-4">
                <div class=" w-full space-y-1">
                    <span class=" text-primary text-[18.75px] leading-[22.86px] font-montserrat font-semibold">{{steps[step].title}}</span>
                    <p class=" text-[9.6px] font-light font-montserrat text-primary leading-[11.7px]">
                        {{steps[step].description}}
                    </p>
                </div>

                <div class=" w-full flex items-center justify-between">
                    <button @click="Prev" class=" hover:bg-opacity-80">
                       <IconArrowLeft />
                    </button>
                    <div class=" flex items-center space-x-2">
                        <button v-if="step < 2" class=" text-primary text-xs font-normal font-montserrat rounded-full border border-primary px-3 py-1 hover:text-opacity-70 hover:border-opacity-70">Skip</button>
                        <button @click="Next" class="  text-xs font-normal font-montserrat rounded-full px-2 py-1 bg-tertiary text-white flex items-center space-x-1  hover:bg-opacity-70">
                            <span>Next</span>
                            <IconArrowRight />
                        </button>

                    </div>
                </div>
            </div>
            <div class=" w-full h-[115px] max-w-[96px] px-5 py-3 bg-white rounded-[18px] flex">
              <div class=" w-full flex items-center flex-col space-y-1 m-auto">
                  <ProgressCounter :step="step" v-if="step <= 8"/>
                  <button v-else class="  w-[50px] h-[50px] bg-tertiary rounded-full border-[2px] border-tertiary flex hover:bg-opacity-70 hover:border-opacity-80" style="box-shadow: 2px 2px 6px #F28F8F;">
                    <span class=" m-auto text-white text-xs font-montserrat font-semibold">Next</span>
                  </button>
                  <span class=" text-primary font-normal text-[9.6px] font-montserrat">Complete</span>
              </div>
            </div>
        </div>
    </div>
</template>


<script>
import IconArrowLeft from '@/components/Icons/IconArrowLeft.vue'
import IconArrowRight from '@/components/Icons/IconArrowRight.vue'
import ProgressCounter from '@/components/UI/ProgressCounter.vue'
import { usesteps } from "@/composables/states";

export default defineComponent({
  setup() {
    const step = usesteps();
    const router = useRouter();
    const steps = ref([
      {
        title:'',
        description:'',
      },
      {
        title: "Foto",
        description: "Pastikan foto yang di upload memiliki Size Paling rendah 3,2 mb",
      },
      {
        title:'Data Diri',
        description:'Pastikan semua data  terisi dengan lengkap dan benar',
      },
      {
        title:'Kemampuan',
        description:'Pastikan kemampuan yang di isi adalah kampuan kamu yang ',
      },
      {
        title:'Pendidikan',
        description:'Hanya disi dengan 2 pendidikan terakhir.',
      },
      {
        title:'Pengalaman Kerja',
        description:'Diisi dengan pengalaman paling dekat paling akhir ',
      },
      {
        title:'Organisasi',
        description:'Organisasi hanya optional jika tidak ada pengalaman kerja',
      },
      {
        title:'Sertifikat',
        description:'Sertifikat yang relevan dengan karir yang kakak harapankan.',
      },
      {
        title:'Kontak',
        description:'Pastikan jangan tulis alamat Lengkap .',
      },
      {
        title:'Kontak',
        description:'Pastikan jangan tulis alamat Lengkap .',
      },
    ]);
    const Next = () => {
      if (step.value < 9) {
        step.value += 1;
      }
    };
    const Prev = () => {
      if (step.value > 1) {
        step.value -= 1;
      }else{
        step.value = 0;
        //go back
        router.back();
      }
    };
    return { step, Next, Prev,steps };
  },
    components: {
        IconArrowLeft,
        IconArrowRight,
        ProgressCounter,
    },
});
</script>