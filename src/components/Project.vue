<template>
    <div class="project-block" id="projects">
      <div class="row align-items-center w-100">
            <div :class="projectLeft ? 'projectLeftStyle col-lg-6' : 'projectRightStyle col-lg-6'">
        <!-- <div class="col-6"> -->
          <a v-if="biltmore" href="https://wcet3.waketech.edu/ksniquer/WEB125/Lesson13/" target="_blank">
            <img v-if="biltmore" class="img-fluid" src="../assets/Biltmore.jpg" alt="Fake Biltmore Estate website">
          </a>
          <a v-if="stokes" href="https://wcet3.waketech.edu/ksniquer/WEB125/StokesCounty/index.html" target="_blank">
            <img v-if="stokes" class="img-fluid" src="../assets/Stokes-County.jpg" alt="Re-designed Stokes County Official website">
          </a>
          <a v-if="uxDesign" href="https://wcet3.waketech.edu/ksniquer/WEB125/Lesson13/" target="_blank">
            <img v-if="uxDesign" class="img-fluid" src="../assets/UX-inMind.jpg" alt="UX in Mind Wordpress website">
          </a>
        </div>

        <div class="col-lg-6 text-center">
          <div class="project-desc">
            <h2 v-if="biltmore">Biltmore Companion Site</h2>
            <h2 v-if="stokes">Stokes County Website Re-Design</h2>
            <h2 v-if="uxDesign">UX in Mind Wordpress Site</h2>
            <p class="pt-4">
              {{this.getDescription()}}
            </p>
            <a href="https://wcet3.waketech.edu/ksniquer/WEB125/Lesson13/" target="_blank" class="see-more">See More</a>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Project',
  data() {
    return {
      pText: ''
    }
  },
  props: {
    biltmore: {
      type: Boolean,
      default: false
      },
    stokes: {
      type: Boolean,
      default: false
      },
    uxDesign: {
      type: Boolean,
      default: false
      },
    projectRight: {
      type: Boolean,
      default: false
      },
    projectLeft: {
      type: Boolean,
      default: false
      }
  },
  methods: {
    getDescription: function () {
        if (this.biltmore) {
          return 'In this project, we were to create a fictional companion website for the Biltmore Estate visitors. I created a series of webpages for the estate winery, where visitors could access a menu of wines and place orders to go while at the winery. The website is meant to naturally blend in with the actual Biltmore Estate website, linking back to the actual website.'
        }
        if (this.stokes) {
          return 'For this project, I developed a responsive website for Stokes County with 8 functional web pages.  I designed a concise, efficient nagivation architecture to showcase the departments, organizations, and services that the county has to offer.  The website was designed using HTML5, CSS3/Bootstrap, and JS.'
        }
        if (this.uxDesign) {
          return 'In this project, I created a fictional WordPress blog for a UX Design blog. With the use of widgets, plugins, and custom CSS, I was able to create a fully-functional blog website with a responsive design.'
        }
    }
  }
}
</script>

<style scoped>
  img {
    box-shadow: 5px 5px 21px 5px rgba(0,0,0,0.25);
  }
  .projectRightStyle {
    order: 13;
  }
  .projectLeftStyle {
    padding: 2rem;
  }
  .see-more {
    text-transform: uppercase;
    padding-top: 1rem;
    color: #000;
    border-bottom: 2px solid #000;
    font-weight: bold;
    font-size: 14pt;
  }
</style>