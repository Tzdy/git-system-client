<template>
  <div id="settings"></div>
</template>

<script>
import axios from "axios";
export default {
  mounted() {
    // 如果url中settings不存在就相当于点击tab切换过来的要手动加url
    // 如果url中存在settings表示从网址过来的就不需要添加了
    axios
      .get(
        "/" +
          this.$route.params.id +
          "/" +
          this.$route.params.repo +
          "/" +
          this.$route.params.options
      )
      .then(data => {
        console.log("setting", data.data);
      });
  }
};
</script>

<style>
</style>