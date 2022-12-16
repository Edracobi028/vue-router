<script setup></script>

<template>
  <!-- Router-link, es un componente que nos agrega vue-router para indicar links a otrs proyectos-->
  <div>
    <!-- evitamos que lo interprete como texto plano aplicamos b-bind -->
    <router-link :to="{ name: 'home' }">Home</router-link>
    <router-link to="/session">Session</router-link>
    <router-link to="/chats">Chats</router-link>
    <router-link :to="{ name: 'about' }">About</router-link>
  </div>
  <router-view></router-view>    
</template>

<style>
</style>
