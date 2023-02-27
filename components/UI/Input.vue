<script setup>
const props =  defineProps({
    label: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: true,
      default: "text",
    },
    modelValue: {
      type: String,
      required: true,
    },
  });
  const { label, placeholder, type, modelValue } = toRefs(props);
  const input = ref(null);
  const emit = defineEmits(['update:modelValue'])
  const focus = () => {
    input.value.focus();
  };
  const blur = () => {
    input.value.blur();
  };
  const updateValue = (event) => {
    emit('update:modelValue', event.target.value)
}
  

</script>

<template>
    <div class=" w-full flex flex-col items-start space-y-2">
        <!-- lable -->
        <span v-if="label" class=" text-xs text-secondary font-normal font-montserrat">{{ label }}</span>
        <!-- input -->
        <div class=" w-full flex flex-row items-center space-x-2">
            <input
                 ref="input"
                :type="type"
                :placeholder="placeholder"
                :value="modelValue"
                class=" w-full p-3 bg-background rounded-xl text-[15px] text-primary font-normal font-montserrat outline-none placeholder-[#4F4F4F33]"
                @focus="focus"
                @blur="blur"
                @input="updateValue"
            />
        </div>

    </div>
</template>