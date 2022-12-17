<!-- <script>
  export default {
    data(){
      return{
        username: '',
      }
    },
    methods:{
      iniciar(){
        //Redirigir utilizando el objeto $router y push para Agregar un nuevo elemento al historial de navegación
        this.$router.push({ name:'about'})

       /* this.$router.go(-1); //Redirije un paso atras */ 
       /*  this.$router.replace('/chats') //La navegación no genera puntos en la historia y remplaza la existente */


      }
    }
  }
</script> -->

<script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router' //funcion que nos va a devolver esa variable this.$router
  const username = ref()

  const router = useRouter() //la importacion de useRouter la llamamos al crear una variable
  //setup se ejecuta antes de los ciclos de vida de componentes (ni se a creado ni montado)
  function iniciar(){
    router.push({ name:'about'})
    
    
  }
</script>

<template>
  <main>
    <h3>Introduce tu nombre de tu usuario </h3>
    <input type="text" placeholder="username" v-model="username">
    <button @click="iniciar">Iniciar sesión</button>
  </main>
</template>
