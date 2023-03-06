<template>
    <div class=" w-full  divide-y">
        <div class=" w-full flex flex-col items-start space-y-4 pb-8">
            <span class=" text-[18.75px] font-medium font-montserrat text-secondary">Hard Skill</span>
            <Input :placeholder="skill.placeholder "  v-model="skill.name" v-for="(skill,index,key) in HardSkill" :key="key"/>
            <button @click="AddHardSkill" class=" bg-background p-3 rounded-xl hover:bg-opacity-75">
                <PluseIcon />
            </button>
        </div>
        <div class=" w-full flex flex-col items-start space-y-4 py-8">
            <span class=" text-[18.75px] font-medium font-montserrat text-secondary">Bahasa</span>
            <div class=" grid grid-cols-3 gap-x-4" v-for="(item,index,key) in Bahasa" :key="key">
               <div class=" col-span-2 w-full">
                 <Input  v-model="item.name" />
               </div>
               <div class=" w-full">
                 <SelectInput v-model="item.level" :options="[
                {lable:'Beginner',value:'beginner'},
                {lable:'Intermediate',value:'intermediate'},
                {lable:'Advance',value:'advance'}
                ]" />
               </div>
            </div>
             
            <button @click="AddBahasa" class=" bg-background p-3 rounded-xl hover:bg-opacity-75">
                <PluseIcon />
            </button>
        </div>
    </div>
</template>

<script setup>
 import Input from '@/components/UI/Input.vue'
 import SelectInput from '@/components/UI/SelectInput.vue'
 import PluseIcon from '@/components/Icons/PluseIcon.vue'

 const HardSkill = ref([
    {
        name:'',
        placeholder:'Ex : Ms. Office'
    },
    {
        name:'',
        placeholder:'Ex : Copy Writting'
    },
    {
        name:'',
        placeholder:'Ex : Photoshop'
    },
    {
        name:'',
        placeholder:'Ex : Design'
    }
 ]);

 const Bahasa = ref([
    {
        name:'',
        level:'',
    },
    {
        name:'',
        level:'',
    },
 ])

 const AddHardSkill = () => {
     HardSkill.value.push({
        name:'',
        placeholder:'Other Skill'
     })
 }
    const AddBahasa = () => {
        Bahasa.value.push({
            name:'',
            level:'',
        })
    }

</script>