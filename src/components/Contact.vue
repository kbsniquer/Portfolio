<template>
  <section id="contact" class="contact container-fluid text-center">
    <div class="row align-items-center">
      <div class="contact-heading col-12">
        <p>Hello there!</p>
        <p>
          I'm currently available for project collaborations, freelance
          projects, or full-time employment. Let's get in touch!
        </p>
      </div>

      <div class="col-12">
        <ul class="contact-information">
          <li>
            <a href="mailto:kbsniquer@gmail.com"
              ><i class="far fa-envelope"></i> Email</a
            >
          </li>
          <li>
            <a href="tel:+17044380447"><i class="fas fa-phone"></i> Phone</a>
          </li>
        </ul>
        <ul class="social-links">
          <li>
            <a href="https://github.com/kbsniquer" target="_blank">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/karen-sniquer" target="_blank"
              >LinkedIn</a
            >
          </li>
          <li>
            <a href="https://karensniquer.wordpress.com/" target="_blank"
              >Blog</a
            >
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.contact {
  background-color: #323759;
  color: white;
  padding: 6rem 3rem 0 3rem;
}
.contact-heading p {
  margin: 0 auto;
  font-size: 16pt;
  width: 50%;
}
.contact-heading p:first-child {
  font-size: 40pt;
  color: #efa16b;
  font-family: "Oswald", sans-serif;
}
.contact-information {
  list-style-type: none;
}
.contact-information li {
  display: inline-block;
  font-size: 20pt;
  text-transform: uppercase;
  padding: 1.5em;
}
.contact-information a {
  color: white;
  text-decoration: none;
}
.social-links li {
  font-size: 14pt;
  text-transform: uppercase;
  display: inline-block;
  border-right: 1px white solid;
  padding: 0 1em 0 1em;
}
.social-links li:last-of-type {
  border-right: none;
}
.social-links a {
  padding-bottom: 0.5rem;
  border-bottom: 2px solid white;
  color: white;
}
.social-links a:hover {
  text-decoration: none;
}
</style>
