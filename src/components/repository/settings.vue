<template>
  <div id="settings"></div>
</template>

<script>
import axios from "axios";
export default {
  mounted() {
   
    axios
      .get(this.$route.path)
      .then(data => {
        console.log("setting", data.data);
      });
  }
};
</script>

<style>
</style>