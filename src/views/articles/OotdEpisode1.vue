<template>
  <v-container class="article d-flex justify-center">
    <v-col cols="12" sm="10" md="8">
      <h1 class="article__title">OOTD</h1>
      <h2 class="article__subtitle">Episode 1 - Presentation</h2>
      <div class="section">
        OOTD (Outfit Of The Day) is a mobile app that allows its users to upload once a day their outfits and
        see others outfits.
      </div>
      <div class="section">
        <h3 class="section__title">Goals</h3>
        <p>
          I want to make this project as simple as possible in order to upload
          it on my portfolio ASAP and show potential recruiters that I can ship 
          a product from A to Z, building code, CI/CD, design.<br/><br/>

          So for this first iteration I want to build a complete product but not feature-dense.
          The features I am thinking of for this first version are:<br/>
          <ul>
            <li>Registration/Login</li>
            <li>OOTD upload</li>
            <li>Seeing other users uploaded OOTD</li>
          </ul><br/>

          Later features I have in mind now (this list won't be complete):<br/>
          <ul>
            <li>Likes</li>
            <li>Comments</li>
            <li>Following people</li>
            <li>Linking worn clothes to real clothes reference</li>
            <li>Sharing on social media</li>
          </ul>
        </p>
      </div>
      <div class="section">
        <h3 class="section__title">Technologies</h3>
        <p>
          I want to use technologies I have interest in.<br/>
          I'll use <b>Flutter</b> to build the mobile app. I already created an app
          with it and had a lot of fun. It is also very convenient as I can have
          both iOS and Android versions with the same code. Also the features I 
          plan on having are not that complex, so not having native apps should 
          not affect performances.<br/><br/>

          For the backend I will go with <b>Django</b>. I do not have a lot of 
          experience with it, but I like Python and it would be a good addition
          to my skillset. <br/><br/>

          Database will be <b>MySQL</b>. 
        </p>
      </div>
      <div class="section">
        <h3 class="section__title">Why OOTD?</h3>
        <p>
          At the time I am writing this article, I live in South Korea. 
          Fashion is a topic a lot of people is interested in, and the morning
          calm country is one of the top countries when it comes to luxury expenses.
          My personal observations lead me to think that there is a lot of pressure
          here regarding what you wear, people will judge you for what you wear 
          a lot more than in France. That is where OOTD comes handy, it will allow 
          users to see what outfit is trendy these days and get an opinion of 
          their current outfit.<br/>
          I think living based on other people point of view is not healthy at all,
          but this is how it works here (for some people, not everybody of course),
          so I am gonna play with the rules of the game I currently live in.</p>
        <p>
            Also it will be interesting to dig deeper in subjects I did not study
            in a long time like UX/UI, and also learn new subjects like marketing.
        </p>
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
