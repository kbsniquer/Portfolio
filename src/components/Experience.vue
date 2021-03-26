<template>
  <section class="resume-experience">
    <!-- Employment block - Copy & paste to add more employment information -->
    <div class="employment-exp row">
      <div class="job col-12 col-lg-6">
        <ul class="job-title-date">
          <li class="title">Production Assistant</li>
          <li class="location">C.N. Clark Company</li>
          <li class="dates">January 2018 - Present</li>
        </ul>
      </div>
      <div class="job-description col-12 col-lg-6">
        <ul>
          <li>
            Managing the production schedule for two employees by communicating
            with customers, processing orders, and organizing daily tasks and
            print jobs.
          </li>
          <li>
            Strengthening production timeliness and minimized errors by revising
            job checklist.
          </li>
        </ul>
      </div>
    </div>
    <!-- End of employment block -->

    <!-- Employment block - Copy & paste to add more employment information -->
    <div class="employment-exp row">
      <div class="job col-12 col-lg-6">
        <ul class="job-title-date">
          <li class="title">Graphic Designer</li>
          <li class="location">WebRealSimple</li>
          <li class="dates">February 2017 - Present</li>
        </ul>
      </div>
      <div class="job-description col-12 col-lg-6">
        <ul>
          <li>
            Increased revenue significantly in 2020 by developing promotional
            calendars and campaigns.
          </li>
          <li>
            Conceptualizing design drafts and creating website banners, email
            designs and social media posts for clients.
          </li>
        </ul>
      </div>
    </div>
    <!-- End of employment block -->

    <!-- Employment block - Copy & paste to add more employment information -->
    <div class="employment-exp row">
      <div class="job col-12 col-lg-6">
        <ul class="job-title-date">
          <li class="title">Library Assistant</li>
          <li class="location">
            The University of North Carolina at Chapel Hill
          </li>
          <li class="dates">May 2017 - January 2018</li>
        </ul>
      </div>
      <div class="job-description col-12 col-lg-6">
        <ul>
          <li>
            Supervising student library employees, by answering questions about
            library procedures and assigning daily/weekly tasks.
          </li>
          <li>
            Entering and processing ILL loans. Entering new library books and
            materials.
          </li>
          <li>
            Overseeing front desk procedures, such as checking in/out library
            materials, answering general questions in person, via phone and
            online chat.
          </li>
          <li>
            Assisting in university website accessibility project, by assuring
            that all online content had appropriate alt tags, structures, color
            contrasts, and video subtitles.
          </li>
        </ul>
      </div>
    </div>
    <!-- End of employment block -->
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.resume-experience {
  background-color: #e4f3f4;
  padding: 1.75rem;
}
.employment-exp {
  padding: 2em 6em 1em 6em;
  border-bottom: 1px #7e969d solid;
}
.employment-exp:last-of-type {
  border-bottom: none;
  padding-bottom: 0;
}
.employment-exp:first-of-type {
  padding-top: 0;
}
.job-title-date li {
  list-style-type: none;
  padding: 0.125em;
}
.see-more {
  padding-top: 1rem;
  color: #000;
  border-bottom: 2px solid #000;
  font-weight: bold;
  font-size: 14pt;
}
.see-more:hover {
  text-decoration: none;
  color: black;
  padding-bottom: 0.25rem;
  transition: 0.25s ease;
}
</style>
