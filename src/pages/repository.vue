<template>
  <div id="repository">
    <el-container>
      <el-main class="main">
        <div>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="item in breadcrumb" :key="item.name">
              <!-- <a :href="item.url">{{ item.name }}</a> -->
              <router-link :to="item.url"> {{ item.name }}</router-link>
            </el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div>
          <el-tabs v-model="activeName">
            <el-tab-pane label="用户管理" name="first">
              <code-area></code-area>
            </el-tab-pane>
            <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
          </el-tabs>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import codeArea from "../components/repository/code";
// import axios from "axios";
export default {
  data() {
    return {
      breadcrumb: [],
      activeName: "first",
      repo: "",
    };
  },
  components: {
    codeArea
  },
  mounted() {
      this.breadcrumb.push({
        url:'/' + this.$route.params.id,
        name:this.$route.params.id
      })
      this.breadcrumb.push({
        url:'',
        name:this.$route.params.repo
      })
  },

  beforeRouteUpdate(to, from, next) {
    console.log("update", to);
    next();
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



