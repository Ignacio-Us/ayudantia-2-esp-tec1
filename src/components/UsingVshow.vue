<template>
    <div>
        <button @click="mostrarMensaje = !mostrarMensaje">Mostrar/Ocultar mensaje</button>
        <p v-show="mostrarMensaje">¡Hola, mundo!</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';


const mostrarMensaje = ref('');

</script>