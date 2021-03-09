<template>
  <div id="app">
    <Navigation />
    <About />
    <Project />
    <Project />
    <Project />
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
  color: #2c3e50;
  margin: 0;
}
</style>
