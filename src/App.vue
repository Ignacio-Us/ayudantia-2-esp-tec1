<template>
  <nav>
    <RouterLink to="/" class="btn btn-primary">inicio</RouterLink>
    <RouterLink to="/vif" class="btn btn-primary">v-if</RouterLink>
    <RouterLink to="/vshow" class="btn btn-primary">v-show</RouterLink>
    <RouterLink to="/vfor" class="btn btn-primary">v-for</RouterLink>
    <RouterLink to="/vbind" class="btn btn-primary">v-bind</RouterLink>
    <RouterLink to="/von" class="btn btn-primary">v-on</RouterLink>
    <RouterLink to="/vmodel" class="btn btn-primary">v-model</RouterLink>
    <RouterLink to="/ejemplo-final" class="btn btn-primary">Ejemplo Final</RouterLink>
  </nav>

  <Suspense>
    <RouterView />
  </Suspense>
</template>

<script>
export default {
  name: 'App',
}
</script>
