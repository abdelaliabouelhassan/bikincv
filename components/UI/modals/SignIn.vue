<template>
<div class="relative z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true" v-if="show">

  <div class="fixed inset-0 bg-[#70707099]  transition-opacity"></div>

  <div class="fixed inset-0 z-50 overflow-y-auto">
    <div class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
      
      <div class="relative py-10 transform overflow-hidden rounded-[14px] bg-white text-left shadow-xl transition-all sm:my-8 w-full max-w-[335px]">
        <div class=" w-full p-5 flex flex-col items-center space-y-4">
            <div>
                <LogoName />
            </div>
            <div class=" flex flex-col items-center space-y-1">
                <span class=" text-[#707070] text-2xl font-semibold text-center font-montserrat">Pilih akun</span>
                <p class=" text-[#707070] text-xs font-medium font-montserrat text-center">
                    untuk melanjutkan ke Bikin.cv
                </p>
            </div>
            <div class=" w-full flex flex-col items-start  px-2">
                <!-- Users List -->
                <div @click="closeModal" v-for="n in 2 " :key="n" class=" w-full flex items-center space-x-2 border-b border-[#707070] py-2 cursor-pointer hover:bg-gray-100 hover:rounded-md  bg-opacity-20">
                    <div class=" w-[50px] h-[50px]">
                        <div class=" w-full h-full overflow-hidden rounded-full bg-gray-400">
                            <img src="/images/user.png" class=" w-full h-full object-cover" alt="">
                        </div>
                    </div>
                     <div class=" flex flex-col items-start space-y-1">
                        <span class=" text-[#707070] font-medium text-sm font-montserrat">fadhil akbar</span>
                        <span class=" text-[#707070] font-light text-sm font-montserrat">fadhil14akbar@gmail.com</span>
                    </div>
                </div>
                <!-- Add User -->
                 <div  class=" w-full flex items-center space-x-4 border-b border-[#707070] py-4 px-2 cursor-pointer hover:bg-gray-100 hover:rounded-md  bg-opacity-20">
                    <div>
                        <AddUserIcon />
                    </div>
                     <div class=" flex flex-col items-start">
                        <span class=" text-[#707070] font-medium text-sm font-montserrat">Tambah Akun Lain</span>
                    </div>
                </div>
            </div>
            <div>
                <p class=" text-xs text-[#707070] text-center font-medium font-montserrat max-w-[270px]">
                    untuk melanjutkan, Google akan membagikan nama, alamat E-mail dan gambar Profile anda ke Bikin.cv 
                </p>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script setup>
import LogoName from  '~/components/Icons/LogoName.vue'
import AddUserIcon from '~/components/Icons/AddUserIcon.vue'
const show = ref(false)

const openModal = () => {
    show.value = true
}

const closeModal = () => {
    show.value = false
}

defineExpose({
        openModal,
})


</script>