<script>
  export default {
    data(){
      return{
        username: '',
      }
    },
    methods:{
      iniciar(){
        //Redirigir utilizando el objeto $router y push para Agregar un nuevo elemento al historial de navegación
        this.$router.push('/chats');

       /* this.$router.go(-1); //Redirije un paso atras */ 
       /*  this.$router.replace('/chats') //La navegación no genera puntos en la historia y remplaza la existente */


      }
    }
  }
</script>

<template>
  <main>
    <h3>Introduce tu nombre de tu usuario </h3>
    <input type="text" placeholder="username" v-model="username">
    <button @click="iniciar">Iniciar sesión</button>
  </main>
</template>
