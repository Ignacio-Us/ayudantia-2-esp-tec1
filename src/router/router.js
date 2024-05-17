import { createWebHistory, createRouter } from "vue-router";
import HomeComponent from "@/components/HomeComponent.vue";
import UsingVif from "@/components/UsingVif.vue";
import UsingVshow from "@/components/UsingVshow.vue";
import UsingVfor from "@/components/UsingVfor.vue";
import UsingVbind from "@/components/UsingVbind.vue";
import UsingVon from "@/components/UsingVon.vue";
import UsingVmodel from "@/components/UsingVmodel.vue";
import EjemploFinal from "@/components/Padre.vue"

const routes = [
    {path: '/' , component: HomeComponent},
    {path: '/vif' , component: UsingVif},
    {path: '/vshow' , component: UsingVshow},
    {path: '/vfor' , component: UsingVfor},
    {path: '/vbind' , component: UsingVbind},
    {path: '/von' , component: UsingVon},
    {path: '/vmodel' , component: UsingVmodel},
    {path: '/ejemplo-final' , component: EjemploFinal}
];

export const router  = createRouter({
    history: createWebHistory(),
    routes
});