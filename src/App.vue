<template>
  <div id="app">
    <Navigation />
    <About />
    <Project :biltmore=true :projectLeft=true />
    <Project :stokes=true :projectRight=true />
    <Project :uxDesign=true :projectLeft=true />
  </div>
</template>

<script>
import Navigation from './components/includes/Navigation.vue'
import About from './components/About.vue'
import Project from './components/Project.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    About,
    Project
  }
}
</script>

<style>
#app {
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
}
</style>
