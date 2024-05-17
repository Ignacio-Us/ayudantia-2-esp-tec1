<template>
    <button v-bind:disable="botonDeshabilitado">Haz clic en mí</button>
</template>

<script setup>
import { ref } from 'vue';

    const botonDeshabilitado = ref('true');
</script>