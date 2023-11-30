<template>
  <v-container fluid class="article d-flex justify-center">
    <v-col cols="12" sm="10" md="8">
      <h1 class="article__title">Seoul Tech Impact Hackathon 2023</h1>
      <h2 class="article__subtitle">Coding for a social cause</h2>
      <div class="section">
        On saturday 25th of November 2023 was held in Seoul the 
        <a target="_blank" href="https://www.seoultechimpact.com/">Seoul Tech Impact Hackathon</a>.
        It was a 24h coding challenge during which we had to come up with a MVP that
        would help people. The organizers prepared multiple workshops during those 24h about
        various subjects (AI, Docker, Git, Vercel). Everyone could join, it was a
        beginner-friendly event.
      </div>
      <div class="section">
        <h3 class="section__title">Requirements</h3>
        <p>This hackathon was very free. The only requirements/limitations were 
          that we could form teams of 5 people maximum and that our project should at least
        help 1 person. We were not restricted by the technologies or the format of the
        output.</p>
      </div>
      <div class="section">
        <h3 class="section__title">My Team</h3>
        <p>
          I decided to register to this hackathon with Michelle, my coworker, she is
          a fullstack developer. She arrived at the event a bit early and she had the occasion
          to meet 3 other women before I arrive and we decided to all form a team of 5.
          This was all our first ever hackathon.
          <v-img src="@/assets/SeoulHackathon/team.jpg" class="my-8"/>
          I'll explain a bit further the project we decided to go for, as the more experienced
          member of the team I decided to give everyone his role in the team regarding everyones
          experience and skills, so here's how the role looked like:
          <ul>
            <li>Michelle, 2-3 years experience as a fullstack developer: <b>Front-end dev</b></li>
            <li>Elizabeth, 1 year self-taught front-end developer: <b>Front-end dev</b></li>
            <li>Suzie, 1 year experience front-end developer: <b>Front-end dev</b></li>
            <li>Sarah, 1 year experience as a designer: <b>Designer</b></li>
            <li>Kevin (me), 6 years fullstack engineer: <b>Backend + Devops</b></li>
          </ul>
        </p>
      </div>
      <div class="section">
        <h3 class="section__title">The Project</h3>
        <p>
          We all thought of ideas before the event started so we would not lose time
          on finding an idea during the actual coding time. We all had interesting ideas
          so it made things a bit harder as we had to decide. But I did not want us to
          lose to much time so I proposed a vote. Everyone in the team was great, nobody
          was mad that his idea was not picked and we ended voting for:
        </p>
        <h3>WhoDaDoc</h3>
        <p>(The name is a word-trick with 후다닥, which means to do something fast, quickly)<br/>
          WhoDaDoc is an app that would help foreigners (and on a lower note, locals too) 
          in Korea to find the right hospital to go to. For a quick background explaination,
          in France when you are hurt you usually go to generalist doctor and if needed
          he/she will recommand you a specialist to go to. In Korea it is a different story.
          You go directly to the specialist. And the main blocking factor is that you have to 
          Google the translation (which might not be accurate) to finally type it in Naver Map
          and hope it would be right and that Naver Map will show you the specialists around
          your area. This process can be a struggle, especially if you have an emergency. 
          I had the case, I hurt my foot pretty bad in 2022 and had to find the right doctor to
          go to, the process was not smooth at all.<br/>
          We decided to make the MVP a basic Web app and I divided the roles as explained in the Team section.
        </p>
      </div>
      <div class="section">
        <div class="section__title">Features</div>
        <p>As the coding time was only 24h we could not go too crazy. So we decided on those features:
          <ul>
            <li>A search page where user could pick from a list of symptoms to describe how they are hurt</li>
            <li>Once the user hits "Search" button, display a map with the matching hospitals for his symptoms</li>
            <li>Hospital list with details</li>
          </ul>
        </p>
        <p>We would first go for those and add more if we ended up earlier</p>
      </div>
      <div class="section">
        <div class="section__title">Technical part</div>
        <p>Technologie-wise, we decided to go for <b>React</b> on the front as all the devs expect Suzie had experience
          with it. I was alone in charge for the backend, so I decided to go with something fast to setup <b>Node/Express</b>.
          We had to host our project somewhere judge could see it (not just on a local server on our computers),
          so I decided to start with that devops part, so then we would just have to worry about development.<br/>
          This part was the one I was less sure about, for the front I was confident with my S3 skills.
          But for the back I only hosted my own projects on VPS, or on a service a friend worked at. The problem is that
          this service didnt propose anything for hosting the database. Elizabeth then told me about 
          <a target="_blank" href="https://render.com">Render.com</a>.
          I never heard about it before and honestly it is amazing for this kind of small projects. I could create the front, the back
          and the database (they proposed a service for PgSQL so I decided on that technology)
          on their service in a matter of minutes after a bit of playing around. And the best part
          is that it integrated with github, so when we pushed on main it would get updated. And all that for free. Amazing !
        </p>
        <p>Once I was done with that the rest was pretty easy and straight forward. Creating the database schema (as bellow), a few endpoints
          for the front end devs to hit and voilà.
        </p>
        <v-img src="@/assets/SeoulHackathon/db.jpg" class="my-8"/>
        <p>We are at around 3-4am now and I am done with my tasks. I can decide to go to sleep but that would not be fun !
          So I decided to add a new feature. So as described before, one of the feature is for the user to pick his symptoms
          from a list. I wanted to add some AI feature to that. So instead of picking symptoms, the user will type directly
          how he feels in natural language. The idea is to tell the GPT to extract symptoms from the user input.
        </p>
        <p>I wanted to use OpenAI API to do so but did not want to pay for a few hours remaining in the challenge. So I decided
          to use an api I found online. I asked it to extract the symptoms from the input and to match it with the list of
          symptoms we had in our database. And I asked it to only answer with the symptoms.<br/>
          The problem is that this GPT was not that smart and retrieve extra data, and symptoms that were not exactly how I
          asked it to output. For example if the user input "I have a terrible headache", and I asked the GPT to extract from it
          symptoms in that list ["headache", "nausea", "cough", ...] and only answer with the symptoms separated by a comma.
          The output from the GPT would be something like "From the text you submitted I could extract 'terrible headache'".<br/>
          I had to remove all the introduction phrase "From the text..." and to solve the "terrible headache" => "headache" issue,
          I had to think a bit more.<br/>
          For the context, I was alreay up for almost 24h, my brain started to feel like mashed potatoes, I kept in mind that this
          was a MVP I had to produce and that I was not looking for perfection. So what I did was to split every symptoms phrases
          the GPT would answer ("terrible headache" => ["terrible", "headache"]) and to apply a Levenstein distance and every resulting
          part and keep only the one with a LD inferior to 1/3 of the length of the part (arbitrary value).<br/>
          It did good enough for the MVP.
        </p>
      </div>
      <div class="section">
        <div class="section__title">Presentation</div>
        <div>This is the part I am less happy about. First of all we had only 5 minutes to present the whole team, the problem, the solution.
          Then we did not planned to prepare the slides early enough and we ended up not being able to reharse at all. So when presentation time
          came it went pretty bad, I honestly think we showed 10% of what we produced technicaly. Did not show the AI part at all, all the
          designs the designer had prepared. Basically we just explained the problem well and show the basic scenario of picking symptoms from
          the list and getting a hospital list as a result and show them on a map.<br/>
          I was disappointed but this was a lesson for me to prepare the presentation better next time, after all this will be the thing that will
          validate or not the last 24 hours we spent coding.
        </div>
      </div>
      <div class="section">
        <div class="section__title">Results</div>
          I was tired and a bit disappointed not gonna lie haha, so I did not expect anything.<br/>
          But we finished <b>2nd !!!</b>.<br/>
          Judges were pleased with our project idea, some of them could related to the issue we were trying to solve, the little part we
          showed was looking good and ergononic.
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
