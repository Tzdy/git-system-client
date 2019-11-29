<template>
  <div id="code">
    <h3>{{ title }}</h3>
    <el-tag class="tag" v-for="item in tag" :key="item">{{ item }}</el-tag>
    <div class="options">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
        <el-menu-item index="1">commits</el-menu-item>
        <el-menu-item index="2">branch</el-menu-item>
      </el-menu>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: "git-system",
      tag: ["javascript", "css", "html"],
      activeIndex: "1",
    };
  },
};
</script>

<style scoped>
#code .tag {
  margin-right: 1rem;
}
</style>