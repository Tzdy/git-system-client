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
      <el-table :data="file" @cell-click="enterClick">
        <el-table-column prop="file"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
/*
    ajax : file
    {
        filename:null,
        file:{
            file:{
                filename:null
            }
        }
    }

*/
import axios from "axios";
export default {
  data() {
    return {
      title: "git-system",
      tag: ["javascript", "css", "html"],
      activeIndex: "1",
      file: [],
      file_back: [],
      file_next: []
    };
  },
  methods: {
    enterClick(e) {
      //存在tree
      if (this.$route.path.search("tree") != -1) {
        this.$router.push({
          path: this.$route.path.split("/").pop() + "/" + e.file
        });
      } else {
        this.$router.push({
          path: this.$route.path.split("/").pop() + "/tree/" + e.file
        });
      }
      /**
       * path : id/repo/tree/filename
       * data.data: [ {file : 'filename'} ]
       */
      axios.get(this.$route.path).then(data => {
        this.file_next = [];
        this.file = data.data;
      });
    }
  },
  mounted() {
    console.log('code mounted')
    // 观察是是否直接通过网址选择该仓库文件
    // tree/...
    if (this.$route.params.pathMatch) {
      axios.get(this.$route.path).then(data => {
        this.file = data.data;
      });
    } else {
      //进入主仓库初始化
      axios
        .get("/" + this.$route.params.id + "/" + this.$route.params.repo)
        .then(data => {
          this.file = data.data;
        });
    }
  }
};
</script>

<style scoped>
#code .tag {
  margin-right: 1rem;
}
</style>