<template>
    <div class=" w-full bg-background p-6 space-y-5" style="box-shadow: 0px 2px 20px rgba(79, 79, 79, 0.2);">
            <div class=" w-full flex items-center justify-between">
                <Logo />
                <button @click="openSignIn">
                    <Profile />
                </button>
            </div>

            <div class=" flex flex-col w-full items-center">
                <span class=" font-semibold font-montserrat text-[18.75px] text-secondary text-center leading-[25.48px]">Get a Profesional CV </span>
                <p class=" text-primary font-normal font-montserrat text-center text-[9.6px] leading-[11.7px] max-w-[170px]">
                    A delightful new way to make your Curriculum Vitae [ CV ] Look like a <span class=" font-semibold">Profesional</span>
                </p>
            </div>
            
            <div class=" relative w-full">
                <input type="text" class=" w-full bg-white text-[#4F4F4F99] placeholder-[#4F4F4F99] text-[15px] font-light font-montserrat pl-5 pr-10 py-3 rounded-full outline-none" placeholder="Search Code CV">
               <button class=" absolute right-4 top-3" >
                 <SearchIcon />
               </button>
            </div>
            <SignIn ref="SignInRef" />
    </div>
</template>


<script>
import Logo from '~/components/Icons/Logo.vue'
import Profile from '~/components/Icons/Profile.vue'
import SearchIcon from '~/components/Icons/SearchIcon.vue'
import SignIn from '~/components/UI/modals/SignIn.vue'
export default {
    components:{
        Logo,
        Profile,
        SearchIcon,
        SignIn
    },
    methods:{
        openSignIn(){
            this.$refs.SignInRef.openModal();
        }
    }
    
}
</script>