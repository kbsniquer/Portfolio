<template>
  <section
    id="landing"
    class="landing min-vh-100 text-center container-fluid d-flex align-items-center justify-content-center"
  >
    <div class="row">
      <div class="col-12 align-self-center">
        <h1 class="landing_heading">Karen Sniquer</h1>
        <p class="landing_text">
          Front-end web developer. Graphic designer. Who likes to make things.
        </p>
      </div>
    </div>

    <div class="row">
      <div class="col-12 fixed-bottom pb-2 arrow">
        <a href="#about"><i class="fa fa-angle-double-down"></i></a>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.landing {
  padding: 0;
  background-color: #212529;
  /* background-image: url(./images/bkg.svg);
  background-attachment: fixed; */
}
.landing_heading,
.landing_text {
  color: white;
}
.landing_heading {
  animation: fadeInAnimation ease 3s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  font-size: 7rem;
  font-family: "Oswald", sans-serif;
}
.landing_text {
  padding-top: 0.75rem;
  animation: fadeInAnimation ease 6s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}
.fa-angle-double-down {
  color: white;
}
.arrow {
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -20px;
  width: 40px;
  height: 60px; /*change with size of arrow to make sit on bottom */
}
@keyframes fadeInAnimation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
