<template>
    <div class=" w-full rounded-2xl bg-[#F8F9FA] px-4 py-3">
        <div class=" w-full flex flex-col items-start ">
            <span class=" font-bold text-secondary font-montserrat text-[23.44px] ">{{price}}</span>
            <div class=" w-full flex items-center justify-between">
                <span class=" font-montserrat text-secondary font-medium text-xs">{{title}}</span>
                 <div class=" pt-1.5 flex items-center space-x-3">
                   <input type="checkbox"  @change="updateValue" :checked="modelValue">
                 </div>
            </div>
        </div>
    </div>
</template>


<script setup>
const props = defineProps({
  price: {
    type: String,
    required: true,
  },
    title: {
        type: String,
        required: true,
    },
     modelValue: {
      type: Boolean,
      required: true,
    },
    index:{
        type: Number,
        required: true,
    }
});
 const emit = defineEmits(['update:selected'])
 const updateValue = (event) => {
    emit('update:selected', {value:event.target.checked,index:props.index})
}
</script>


<style scoped>
input[type="checkbox"] {
  position: relative;
  width: 36px;
  height: 20px;
  -webkit-appearance: none;
  -webkit-appearance: none;
  background: #F28F8F33;
  outline: none;
  cursor: pointer;
  border-radius: 20px;
  box-shadow: inset 0 0 5px #F28F8F33;
  transition: background 300ms linear;
}

input[type="checkbox"]::before {
  position: absolute;
  content: "";
  width: 16px;
  height: 16px;
  top: 2px;
  left: 2px;
  border-radius: 20px;
  background-color: #f7f7fa;
  transform: scale(1.1);
  box-shadow: 0 2px 5px #F28F8F33;
  transition: left 300ms linear;
}

input[type="checkbox"]:checked {
  background: #F28F8F;
}

input[type="checkbox"]:checked::before {
  left: 18px;
  background-color: #f7f7fa;
}
</style>