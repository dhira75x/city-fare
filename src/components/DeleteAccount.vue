<template>
   <div >
    <Header  />
    <div class="p-24">
      <h1 class="text-2xl mb-2"> <strong>Request Account Delete</strong></h1> <br>
      <p class="text-green-500">{{ message }}</p>
      <p class="text-red-500">{{ error }}</p>
      <form @submit.prevent="deleteAccount">
        <input type="email" v-model="email" placeholder="Input email address" class="p-2 w-48 mb-4 border border-black" required> <br>
        <button type="submit"  class="border border-red-800 bg-red-500 hover:bg-red-900 text-white p-4">Request Delete Account</button>
      </form>
    </div>
    
   </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
    import Header from "./molecules/Navigation.vue";
    import axios from "axios";

    const email = ref()
    const message = ref()
    const error = ref()
    const deleteAccount = () => {
     axios.post(`https://admin.cityfare.ng/api/users/request-delete/${email.value}`).then((res) => {
      if(res.status === 200) {
        message.value = "account delete request successful"
          setTimeout(() => {
            window.location.reload()
          }, 5000);
      }
     }).catch((e) => {
        error.value = "error requesting delete account"
        setTimeout(() => {
            window.location.reload()
          }, 5000);
     })
      
    
    }
    
  
  </script>
  
  <style scoped>
  .terms-conditions {
    color: #333;
  }
  </style>
  