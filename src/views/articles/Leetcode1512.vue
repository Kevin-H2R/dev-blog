<template>
  <v-container class="article">
    <v-col>
      <h1 class="article__title">Leetcode of the Day</h1>
      <h2>1512 - Number of Good Pairs</h2>
      <h3>Instructions</h3>
      <p>
        Given an array of integers nums, return the number of good pairs.<br />
        A pair (i, j) is called good if nums[i] == nums[j] and i &lt; j.
      </p>
      <h3>Examples</h3>
      <p>
        Example 1:<br />
        Input: nums = [1,2,3,1,1,3]<br />
        Output: 4<br />
        Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5)
        0-indexed.<br />

        Example 2:<br />
        Input: nums = [1,1,1,1]<br />
        Output: 6<br />
        Explanation: Each pair in the array are good.<br />

        Example 3:<br />
        Input: nums = [1,2,3]<br />
        Output: 0<br />
      </p>
      <h3>Though of process</h3>
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
      <h3>Solution</h3>
      <img
        src="https://kebinou-dev-blog.s3.ap-northeast-2.amazonaws.com/leetcode/1512/solution.jpg"
      />
      <h3>Perfs</h3>
      <img
        src="https://kebinou-dev-blog.s3.ap-northeast-2.amazonaws.com/leetcode/1512/perfs.jpg"
      />
      <h3>Complexity</h3>
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
    </v-col>
  </v-container>
</template>
<script>
export default {
  name: "LeetCode1512",
};
</script>
<style>
@import "@/styles/article.scss";
</style>
