<template>
  <div class="  w-full">
        <Hero />
        <div class=" w-full py-10 space-y-2">
          <div class=" w-full flex items-center justify-between px-5">
            <button v-for="(car,index,key) in categories" :key="key" @click="SelectCatgeory(index)">
              <span class=" text-[15px] font-montserrat hover:text-tertiary" :class="{'text-tertiary font-semibold':index == activeIndex,'font-normal text-primary':index != activeIndex}">{{car.name}}</span>
            </button>
            
         
            
          </div>
          <div class=" w-full pb-20">
            
              <swiper-container
                :slides-per-view="1.4"
                :space-between="spaceBetween "
                :centered-slides="true"
                :pagination="false"
               
                @progress="onProgress"
                @slidechange="onSlideChange" class=" py-4 space-x-5"
              >
                <swiper-slide class="max-w-[237.87px] rounded-[20px] w-full" v-for=" (cv,index,key) in cvs" :key="key" style="box-shadow: 8px 8px 20px rgba(79, 79, 79, 0.2);">
                  <Cv :cvcode="cv.cvcode" :image="cv.image"/>
                </swiper-slide>
              </swiper-container>
          </div>

          
        </div>
  </div>
</template>


<script>
import { register } from 'swiper/element/bundle';
import Cv from '~/components/UI/Cv.vue'
register();
import Hero from '~/components/UI/Hero.vue'
export default {
    components:{
        Hero,
        Cv
    },
    data(){
      return {
        spaceBetween : 10,
        cvs:[
          {
            cvcode:'BCV 017',
            image:'/images/cv1.svg',
          },
          {
             cvcode:'BCV 018',
            image:'/images/cv2.svg',
          },
           {
             cvcode:'BCV 019',
            image:'/images/cv3.svg',
          },
           {
             cvcode:'BCV 020',
            image:'/images/cv4.svg',
          },
           {
             cvcode:'BCV 021',
            image:'/images/cv5.svg',
          },
           {
             cvcode:'BCV 022',
            image:'/images/cv6.svg',
          },
           {
             cvcode:'BCV 023',
            image:'/images/cv7.svg',
          },
            {
             cvcode:'BCV 024',
            image:'/images/cv8.svg',
          },
        ],
        categories:[
          {
            name:'New',
          },
          {
            name:'Popular',
          },
          {
            name:'ATS',
          },
          {
            name:'Creative',
          },
          {
            name:'Profesi',
          }
        ],
        activeIndex: 0,
      }
    },
    methods:{
      SelectCatgeory(index){
        this.activeIndex = index;
      },
      onProgress(swiper) {
        console.log(swiper.progress);
      },
      onSlideChange(swiper) {
        console.log(swiper.activeIndex);
      },
    }
    
}
</script>