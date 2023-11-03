<template>
    <v-container class="article d-flex justify-center">
      <v-col cols="12" sm="10" md="8">
        <h1 class="article__title">OOTD</h1>
        <h2 class="article__subtitle">Episode 2 - Architecture</h2>
        <div class="section">
          <a href="/article/2">Read episode 1 to know what is the goal of OOTD</a>
        </div>
        <div class="section">
          <h3 class="section__title">Architecture</h3>
          <p>
            Regarding the system architecture, I want to come up with something scalable
            but keeping things not too complicated.</p>
          <p>
            I am going to aim for this kind of metrics:
            <ul>
              <li>400'000 daily users</li>
              <li>100'000 OOTD upload / day. <i> As a side note that might be 
                useful (or not), target is Korean people, so we can guess there 
                will be more activity in the morning because people
                would upload their outfit after getting ready in the morning
                before going to work/anywhere</i>
              </li>
              <li>40'000'000 OOTD browsed / day <i>(not unique)</i></li>
            </ul>
          </p>
          <p>
            Those are way over exagerated metrics, but this is a good practice, will
            force me to think of an architecture a bit more complex than a simple
            client-server-db architecture.
          </p>
        </div>
        <div class="section">
          <h3 class="section__title">Schema</h3>
          <v-img src="@/assets/archiOOTD.png"></v-img>
        </div>
        <div class="section">
          <h3 class="section__title">Explanation</h3>
          <p>I will explain in a bit more details this artchitecture schema. Please note that
            I do not detail all the authentication and other "simple" requests here.
            Just explaining the architecture related to the main feature of OOTD: 
            uploading/reading OOTDs
          </p>
          <ul>
            <li>The client makes a request to a load balancer.</li>
            <li>This load balancer redirects to a writing service or a 
              reading service regarding what the user is doing.</li>
            <li>Each of those service (the colored blocks) are duplicatable in order to handle
              as many request as it needs to.</li>
            <li>The writing service will be in charge to upload to a bucket the image and store
              the metadatas in the db.</li>
            <li>This db is the master in a master-slave relationship with the slaves
              databases being in the reading service. So this master will replicate the data
              in the databases in the reading service. <i>In case of high traffic and duplication
              of the writing services for scalability, it should not cause a problem that the 
              different masters db do not have the same data, as far as I can think of now</i>
            </li>
            <li>Reading service will get the data from the slaves database and deliver it to clients.</li>
            <li>I put a CDN for the image to be delivered faster. I am not sure of the usefulnes of
              it as I will target South Korea mainly. I need to do more research on it.
            </li>
          </ul>
        </div>
      </v-col>
    </v-container>
  </template>
  <script>
  export default {
    name: "OotdEpisode1",
  };
  </script>
  <style lang="scss">
  @import "@/styles/article.scss";
  </style>
  