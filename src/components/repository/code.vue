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
      <el-table :data="file" @cell-click="print">
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

export default {
  data() {
    return {
      title: "git-system",
      tag: ["javascript", "css", "html"],
      activeIndex: "1",
      ajax: {
        "app.js": null,
        file: {
          ofile: {
            "config.js": null
          }
        }
      },
      file: [],
      file_index: "",
      //当前
      now_file: []
    };
  },
  methods: {
    print(e) {
      if (this.ajax[e.file]) {
        this.$router.push({ path: this.now_file[this.now_file.length-1] + "/" + e.file });
        this.file = [];
        Object.keys(this.ajax[e.file]).forEach(item => {
          this.file.push({
            file: item
          });
        });
        this.now_file.push(e.file);
      } else {
        if (this.now_file[this.now_file.length-1] != e.file) {
          this.$router.push({ path: this.now_file[this.now_file.length-1] + "/" + e.file });
          this.now_file.push( e.file);
          console.log(e.file);
        }
      }
    }
  },
  mounted() {
    this.now_file.push(this.$route.params.repo);
    let fileArr = Object.keys(this.ajax);
    fileArr.forEach(item => {
      this.file.push({
        file: item
      });
    });
  },
  beforeCreate() {
    let co_obj = this.ajax;
    let path_arr = this.$route.params.pathMatch;
    if (Array.isArray(path_arr)) path_arr = path_arr.split("/");
    else return;
    try {
      for (let i = 0; i < path_arr.length; i++) {
        if (path_arr[i].length != 0) {
          co_obj = co_obj[path_arr[i]];
        }
      }
    } catch (e) {
      alert("无效地址");
    }
  }
};
</script>

<style scoped>
#code .tag {
  margin-right: 1rem;
}
</style>