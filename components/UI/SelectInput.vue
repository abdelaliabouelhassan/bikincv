
<template>
    <div class=" w-full flex flex-col items-start space-y-2">
        <!-- lable -->
        <span v-if="label" class=" text-xs text-secondary font-normal font-montserrat">{{ label }}</span>
        <!-- input -->
        <div class=" w-full flex flex-row items-center space-x-2 cursor-pointer relative" @click="show = !show">
            <div ref="input" :class="background" class=" w-full text-[15px] text-primary font-normal font-montserrat outline-none placeholder-[#4F4F4F33] whitespace-nowrap">{{modelValue}}</div>
            <div class=" absolute" :class="arrow">
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M7.30197 6.17165L2.3553 1.22498C2.24684 1.11563 2.11781 1.02884 1.97564 0.969607C1.83347 0.910377 1.68098 0.879883 1.52697 0.879883C1.37295 0.879883 1.22046 0.910377 1.07829 0.969607C0.936124 1.02884 0.80709 1.11563 0.698633 1.22498C0.48134 1.44357 0.359375 1.73926 0.359375 2.04748C0.359375 2.3557 0.48134 2.65139 0.698633 2.86998L4.82863 6.99998L0.698633 11.13C0.48134 11.3486 0.359375 11.6443 0.359375 11.9525C0.359375 12.2607 0.48134 12.5564 0.698633 12.775C0.807646 12.8831 0.936932 12.9687 1.07908 13.0267C1.22122 13.0848 1.37343 13.1142 1.52697 13.1133C1.68051 13.1142 1.83271 13.0848 1.97486 13.0267C2.117 12.9687 2.24629 12.8831 2.3553 12.775L7.30197 7.82831C7.41132 7.71986 7.49811 7.59082 7.55734 7.44865C7.61657 7.30648 7.64706 7.15399 7.64706 6.99998C7.64706 6.84597 7.61657 6.69348 7.55734 6.55131C7.49811 6.40914 7.41132 6.2801 7.30197 6.17165V6.17165Z" fill="#4F4F4F"/> </svg>
            </div>
        </div>
    </div>
      <div id="containerSelect" class=" w-full fixed bottom-0 z-50  inset-x-0 max-w-[375px] m-auto" v-if="show">
        <div class=" w-full bg-white px-5 pt-1 pb-4" style="border-radius: 20px 20px 0px 0px;">
            <div class=" w-full flex cursor-pointer" @click="show = false">
                <div class=" w-[70px] h-[5px] bg-[#9B9B9B] rounded-full m-auto"></div>
            </div>
            <div class=" w-full  px-5">
                <div class=" w-full flex items-center justify-between border-b py-4" v-for="(item,index,key) in options" :key="key">
                    <span class=" text-xs font-montserrat font-medium text-[#707070]">{{item.lable}}</span>
                    <input type="radio" name="selectInput" @click="updateValue(item.value)" class="  w-[24px] h-[24px] cursor-pointer" :checked="modelValue == item.value" :value="item.value">
                </div>
                
            </div>
        </div>
      </div>
</template>


<script setup>
const props =  defineProps({
    label: {
      type: String,
      required: false,
    },
    modelValue: {
      type: String,
      required: true,
    },
    options:{
        type: Array,
        required: true,
        default: () => []
    },
     background:{
      type: String,
      required: false,
      default: "bg-background rounded-xl p-3 h-[46px]",
    },
    arrow:{
      type: String,
      required: false,
      default: "right-4 top-4 ",
    }
  });
  const { label,modelValue,options } = toRefs(props);
  const input = ref(null);
  const emit = defineEmits(['update:modelValue'])
  const show = ref(false);
  const focus = () => {
    input.value.focus();
  };
  const blur = () => {
    input.value.blur();
  };
  const updateValue = (value) => {
    emit('update:modelValue', value)
  }
   const handleClickOutside = (event) => {
    if (!input.value.contains(event.target)) {
        if(document.getElementById("containerSelect")){
            if(!document.getElementById("containerSelect").contains(event.target)){
                show.value = false;
            }
        }  
    }
    };
    onMounted(() => {
       document.addEventListener("click", handleClickOutside);
    });
    onUnmounted(() => {
       document.removeEventListener("click", handleClickOutside);
    });
    
  

</script>
