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
            <el-tab-pane label="用户管理" name="first">
              <code-area ref="code"></code-area>
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
      file_back: [],
      file_next: []
    };
  },
  components: {
    codeArea
  },
  mounted() {
    this.breadcrumb.push({
      url: "/" + this.$route.params.id,
      name: this.$route.params.id
    });
    this.breadcrumb.push({
      url: "",
      name: this.$route.params.repo
    });
    console.log(this.$refs.code.title);
  },

  beforeRouteUpdate(to, from, next) {
    // 判断是前进还是后退
    function judgeGoFroword(from, to) {
      function filter(item) {
        return item.length > 0;
      }
      if(from.path.split('/').filter(filter).length > to.path.split('/').filter(filter).length)
        return false;
      else 
        return true;  
    }
    // 测试函数
    if(judgeGoFroword(from, to))
      console.log('goforword')
    else
      console.log('goback');  
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



