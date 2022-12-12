<script setup></script>

<template>
  <!-- Router-link, es un componente que nos agrega vue-router para indicar links a otrs proyectos-->
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/chats">Chats</router-link>
    <router-link to="/about">About</router-link>
  </div>
  <router-view></router-view>    
</template>

<style>
</style>
