<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="container">
        <h1 class="text-center my-4">Componente Padre</h1>

        <Hijo :mensaje="mensajePadre" @actualizarMensaje="mensajePadre = $event" />

        <button class="btn btn-primary mt-3" @click="resetearMensaje">Resetear Mensaje</button>
        <p v-if="mensajePadre === 'Hola desde el padre'">
            El mensaje está en su estado original
        </p>
        <p v-else class="mt-3 text-warning">
            El mensaje ha sido cambiado por
            el hijo
        </p>

        <div class="mt-5">
            <h2>Lista de tareas</h2>
            <div v-for="(tarea, index) in tareas" :key="index" class="form-check">
                <input type="checkbox" v-model="tarea.completada" :id="'tarea + index'" class="form-check-input">
                <label for="'tarea + index'" class="form-check-label"> {{ tarea.nombre }}</label>

                <p v-if="tarea.completada" class="text-success">¡Tarea completada!</p>
            </div>
        </div>
    </div>
</template>

<script>
import Hijo from './Hijo.vue';

export default {
    components: {
        Hijo
    },
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Base',
    data() {
        return {
            mensajePadre: 'Hola desde el padre',
            tareas: [
                { nombre: 'Tarea 1', completada: false },
                { nombre: 'Tarea 2', completada: false },
                { nombre: 'Tarea 3', completada: false }
            ]
        }
    },
    methods: {
        resetearMensaje() {
            this.mensajePadre = 'Hola desde el padre';
        }
    }
}


</script>