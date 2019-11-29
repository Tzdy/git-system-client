<template>
  <div id="repository">
    <el-container>
      <el-main class="main">
        <div>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="item in breadcrumb" :key="item.name">
              <!-- <a :href="item.url">{{ item.name }}</a> -->
              <router-link :to="item.url">{{ item.name }}</router-link>
            </el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div>
          <el-tabs v-model="activeName">
            <el-tab-pane :lazy="true" label="用户管理" name="code"></el-tab-pane>
            <el-tab-pane :lazy="true" label="配置管理" name="settings"></el-tab-pane>
            <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
          </el-tabs>
        </div>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>


// import axios from "axios";
export default {
  data() {
    return {
      breadcrumb: [],
      activeName: ""
    };
  },
  mounted() {
    // 仓库面包屑初始化
    this.breadcrumb.push({
      url: "/" + this.$route.params.id,
      name: this.$route.params.id
    });
    this.breadcrumb.push({
      url: "",
      name: this.$route.params.repo
    });
  }
};
</script>

<style scoped>
#repository {
  width: 980px;
  position: relative;
  left: 50%;
  margin-left: -490px;
}
</style>



