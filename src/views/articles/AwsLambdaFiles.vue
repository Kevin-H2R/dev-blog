<template>
  <v-container fluid class="article d-flex justify-center">
    <v-col cols="12" sm="10" md="8">
      <h1 class="article__title">Handling files from request in AWS lambda</h1>
      <h2 class="article__subtitle">Typescript</h2>
      <div class="section">
        <p>
          At work we are building an app using <a  target="_blank" href="https://aws.amazon.com/serverless/sam/">AWS SAM</a>.
        </p>
        <p>We currently had it working with an API gateway that would then redirect the request to the wanted
          Lambda function. This function would get the request, execute and send the response to the client.
        </p>
        <p>It worked fine for basic requests with a JSON body. But we had to develop an endpoint that would
          accept both files aswell as a JSON parameters too. 
        </p>
      </div>
      <div class="section">
        <h3 class="section__title">The problem</h3>
        <p>Usually, we parsed a JSON object from the body we got from the request (l.13)</p>
        <v-img src="@/assets/AwsLambdaFiles/usual_request.png"/>
        <p class="mt-10">When doing the same with a request containing a file we get a parsing error as the file is encoded and does
          not fit the JSON format.
        </p>
        <p>We can use <b>Buffer</b> to bypass that issue, but I could not find a way to read the extra JSON data when
        using it.</p>
      </div>
      <div class="section">
        <h3 class="section__title">The solution</h3>
        <p>After some research I stumbled upon this package: 
          <a  target="_blank" href="https://github.com/francismeynard/lambda-multipart-parser">lambda-multipart-parser</a></p>
        <p>It does not have a lot of stars, and does not seem to be maintained regularly, so I was a bit dubious on using
          it, but it works. Regarding the previsouly raised concerns, I will take a look at the source later on to understand
          the principle behind it and make my own version of it if some security issues are raised.
        </p>
        <p>I am using postman to test my requests and I configured it this way:</p>
        <v-img src="@/assets/AwsLambdaFiles/postman.png"/>
        <p class="mt-10">I then changed my lambda's code to this:</p>
        <v-img src="@/assets/AwsLambdaFiles/solution.png"/>
        <p class="mt-10">This way I can access all the files in the request, for each of those, I can get info like fieldName or name of the file.
          And I also have access to others parameters of the request.
        </p>
      </div>
    </v-col>
  </v-container>
</template>
<script>
export default {
  name: "AwsLambdaFiles",
};
</script>
<style lang="scss">
@import "@/styles/article.scss";
</style>
