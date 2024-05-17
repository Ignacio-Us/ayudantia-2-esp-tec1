<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="card mt-3">
        <div class="card-body">
            <h5 class="card-title">Componente Hijo</h5>

            <p class="card-text">{{ mensaje }}</p>

            <button class="btn btn-success" v-on:click="emitirEvento">Cambiar Mensaje</button>

            <p v-show="mensajeCambiado">El mensaje ha sido cambiado</p>
        </div>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Hijo',
    props: ['mensaje'],
    data() {
        return {
            mensajeCambiado: false
        }
    },
    methods: {
        emitirEvento() {
            this.mensajeCambiado = true;
            this.$emit('actualizarMensaje', 'Nuevo mensaje desde el hijo');
        }
    }
}
</script>