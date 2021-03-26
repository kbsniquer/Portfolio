<template>
  <div id="app">
    <Navigation />
    <router-view></router-view>
    <Landing />
    <About />
    <Project :biltmore="true" :projectLeft="true" />
    <Project :stokes="true" :projectRight="true" />
    <Project :uxDesign="true" :projectLeft="true" />
    <Experience />
    <Education />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Navigation from "./components/includes/Navigation.vue";
import Landing from "./components/Landing.vue";
import About from "./components/About.vue";
import Project from "./components/Project.vue";
import Experience from "./components/Experience.vue";
import Education from "./components/Education.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/includes/Footer.vue";

export default {
  name: "App",
  components: {
    Navigation,
    Landing,
    About,
    Project,
    Experience,
    Education,
    Contact,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: "Raleway", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
}
</style>
