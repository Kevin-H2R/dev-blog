<template>
<div class="d-flex flex-column scroll-container">
  <div class="segment segment--first">First</div>
  <div class="segment segment--middle">Middle</div>
  <div class="segment segment--last">Last</div>
</div>
</template>
<script>
export default {
  name: 'ScrollingView'
}
</script>
<style lang="scss" scoped>
@import "@/styles/theme.scss";
.scroll-container {
  height: 100%;
  .segment {
    display: flex;
    align-items: center;
    &--first {
      background: green;
      height: 25%;
    }
    &--middle {
      background: red;
      height: 50%
    }
    &--last {
      background: blue;
      height: 25%;
    }
  }
}
</style>