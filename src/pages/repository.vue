<template>
  <div id="repository">
    <el-container>
      <el-main class="main">
        <div>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="item in breadcrumb" :key="item.name">
              <a :href="item.url">{{ item.name }}</a>
            </el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div>
          <el-tabs v-model="activeName">
            <el-tab-pane label="用户管理" name="first"><code-area></code-area></el-tab-pane>
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
import codeArea from '../components/repository/code';

export default {
  data() {
    return {
      breadcrumb: [],
      activeName: "first",
      repo:''
    };
  },
  components:{
    codeArea
  },
  mounted() {
    let path_arr = window.location.pathname.split("/");
    let str = window.location.origin;
    //从1开始，因为pathname用/切开后第一项是空。
    for (let i = 1; i < path_arr.length; i++) {
      str = str + "/" + path_arr[i];
      let obj = {
        url: str,
        name: path_arr[i]
      };
      this.breadcrumb.push(obj);
    }
   
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



