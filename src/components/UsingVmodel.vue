<template>
    <input v-model="mensaje" placeholder="Escribe algo">
    <p>El mensaje es: {{ mensaje }}</p>
</template>

<script setup>
import { ref } from "vue";

const mensaje = ref('');
</script>