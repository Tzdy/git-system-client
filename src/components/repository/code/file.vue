<template>
  <div id="file">
    <el-table :data="file">
      <el-table-column>
        <template slot-scope="scope">
          <router-link :to="scope.row.url">{{ scope.row.name }}</router-link>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// 判断是前进还是后退
function judgeGoFroword(from, to) {
  function filter(item) {
    return item.length > 0;
  }
  if (
    from.path.split("/").filter(filter).length >
    to.path.split("/").filter(filter).length
  )
    return false;
  else return true;
}
import axios from "axios";
export default {
  data() {
    return {
      file: [],
      prefix: "",
      file_next: [],
      file_back: [],
      isDisable: false
    };
  },
  methods: {
    click() {
      console.log("http");
    }
  },
  mounted() {
    //如果通过网址进来就能直接识别到this.$route.params.pathMatch反之就是从/Tsdy/app一步一步点过来的
    //主要是在/Tsdy/app时的初始化有区别
    if (!this.$route.params.pathMatch)
      this.prefix = this.$route.params.repo + "/tree/";
    else this.prefix = this.$route.params.pathMatch.split("/").pop() + "/";
    //初始化
    axios.get(this.$route.path).then(data => {
        let arr = [];
      data.data.forEach(item => {
        arr.push({
          name: item.name,
          url: this.prefix + item.name
        });
      });
      this.file = arr;
    });
  },
  beforeRouteUpdate(to, from, next) {
    if (this.isDisable) {
      next(false);
      return;
    }

    if (judgeGoFroword(from, to)) {
      console.log(true);
      this.isDisable = true;
      if (to.params.pathMatch)
        this.prefix = to.params.pathMatch.split("/").pop() + "/";
      axios
        .get(to.path)
        .then(data => {
            let arr = [];
          this.file_back.push(this.file);
          data.data.forEach(item => {
            arr.push({
              name: item.name,
              url: this.prefix + item.name
            });
          });
          this.file = arr;
          this.isDisable = false;
        })
        .catch(() => {
          this.isDisable = false;
        });
    } else {
      this.file = this.file_back.pop();
    }
    next();
  }
};
</script>

<style>
</style>