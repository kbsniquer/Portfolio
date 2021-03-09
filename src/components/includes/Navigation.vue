<template>
    <nav class="navbar navbar-expand-lg fixed-top">
      <a class="navbar-brand" href="#">Karen Sniquer</a>
      <button class="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#projects">Projects</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#experience">Experience</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#education">Education</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>
.navbar {
    background-color: #3a3738;
}

.navbar a {
    color: white;
    text-transform: uppercase;
}

.navbar-brand {
    font-size: 1.5rem;
}
</style>