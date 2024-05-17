<template>
    <button v-on:click="contador++">Haz clic en mí</button>
    <p>Has hecho clic {{ contador }} veces.</p>
</template>

<script setup>
import { ref } from "vue";

const contador = ref('0');
</script>