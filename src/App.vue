<template>
  <div id="app">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>

export default {
  name: "app"
};
</script>

<style>
body,
html {
  width: 100%;
  height: 100%;
}
* {
  padding: 0;
  margin: 0;
}
#app {
  height: 100%;
  width: 100%;
}
.header {
  background: rgb(87, 172, 255);
}
.container {
  height: 100%;
}

.el-dropdown-link {
  cursor: pointer;
  color: white;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.user-operate{
  position: absolute;
  right: 0;
  margin-top: 10px;
}
</style>
