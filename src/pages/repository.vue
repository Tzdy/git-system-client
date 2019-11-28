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
          <el-tabs v-model="activeName" @tab-click="tabClick">
            <el-tab-pane :lazy="true" label="用户管理" name="code">
              <code-area ref="code"></code-area>
            </el-tab-pane>
            <el-tab-pane :lazy="true" label="配置管理" name="settings"><settings></settings></el-tab-pane>
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
import settings from "../components/repository/settings";
// import axios from "axios";
export default {
  data() {
    return {
      breadcrumb: [],
      activeName: "",
      
    };
  },
  methods:{
    tabClick(e) {

      window.location.href = '/' + this.$route.params.id + '/' + this.$route.params.repo  + (e.name=='code'?'':'/' + e.name);
    }
  },
  components: {
    codeArea,
    settings
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

    // 观察是否直接通过网址进入options（Tab），如果进入options就不需要在ajax请求仓库文件
    if (this.$route.params.options) {
      this.activeName = 'settings';
    } else{
      this.activeName = 'code';
    }


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
    // 前进
    if(judgeGoFroword(from, to)){
      this.$refs.code.file_back.push(this.$refs.code.file);
      let next = this.$refs.code.file_next.pop();
      //如果next有东西才相当于前进
      if(next != undefined)
        this.$refs.code.file = next;
    }
    else{
      this.$refs.code.file_next.push(this.$refs.code.file);
      this.$refs.code.file = this.$refs.code.file_back.pop();
    }
        
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



