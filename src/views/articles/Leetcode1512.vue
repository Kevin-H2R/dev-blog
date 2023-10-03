<template>
  <v-container class="article">
    <v-col>
      <h1 class="article__title">Leetcode of the Day</h1>
      <h2 class="article__subtitle">1512 - Number of Good Pairs</h2>
      <div class="section">
        <h3 class="section__title">Instructions</h3>
        <p>
          Given an array of integers nums, return the number of good pairs.<br />
          A pair (i, j) is called good if nums[i] == nums[j] and i &lt; j.
        </p>
      </div>
      <div class="section">
        <h3 class="section__title">Examples</h3>
        <p>
          <b>Example 1:</b><br />
          Input: nums = [1,2,3,1,1,3]<br />
          Output: 4<br />
          Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5)
          0-indexed.<br /><br />

          <b>Example 2:</b><br />
          Input: nums = [1,1,1,1]<br />
          Output: 6<br />
          Explanation: Each pair in the array are good.<br /><br />

          <b>Example 3:</b><br />
          Input: nums = [1,2,3]<br />
          Output: 0<br /><br />
        </p>
      </div>
      <div class="section">
        <h3 class="section__title">Though of process</h3>
        <p>
          We create an empty list.<br />
          We create a counter for the result. <br />
          We iterate throught the index of the array. At each index, we check if
          the number is in our list.<br />
          If it is, we increase the counter, if not we add the number to the
          list.<br />
          => this would make the first example fail, the (3, 4) pair of '1's would
          not be counted<br />
          => instead of a list, we create a map. We iterate through index again,
          forearch number we check if its in the map,<br />
          if it is not, we create map[i] = 1 then we go on to the next index,<br />
          if it is, we add map[i] to the result then we increment map[i]
        </p>
      </div>

      <div class="section">
        <h3 class="section__title">Solution</h3>
        <img class="article__image"
          src="https://kebinou-dev-blog.s3.ap-northeast-2.amazonaws.com/leetcode/1512/solution.jpg"
        />
      </div>

      <div class="section">
        <h3>Perfs</h3>
        <img class="article__image"
          src="https://kebinou-dev-blog.s3.ap-northeast-2.amazonaws.com/leetcode/1512/perfs.jpg"
        />
      </div>
      <div class="section">
        <h3 class="section_title">Complexity</h3>
        <h4>Time</h4>
        <p>
          We iterate one time though <i>nums</i> => O(n)<br />
          Looking for a key in a map => O(1)<br />
          => Time complexity: <b>O(n)</b>
        </p>
        <h4>Space</h4>
        <p>
          We save at worst n numbers in the map => O(n)<br />
          => Space complexity: <b>O(n)</b>
        </p>
      </div>
      <div class="section">
        <h3 class="article__section">After thoughts</h3>
        <p>
          Very easy one. I don't think there's a way to go below this time complexity.
        </p>
      </div>
    </v-col>
  </v-container>
</template>
<script>
export default {
  name: "LeetCode1512",
};
</script>
<style lang="scss">
@import "@/styles/article.scss";
</style>
