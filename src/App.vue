<template>
  <div id="app">
    <el-container class="container">
      <el-header class="header">
        <el-dropdown class="user-operate">
          <span class="el-dropdown-link">
            下拉菜单
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item disabled>双皮奶</el-dropdown-item>
            <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>

      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </el-container>
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
