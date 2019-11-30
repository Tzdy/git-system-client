<template>
  <div id="file">
    <div>
      <el-button class="file-operate">create file</el-button>
      <el-button class="file-operate">upload file</el-button>
      <el-button class="file-operate">find file</el-button>
      <el-button class="file-operate">history</el-button>
    </div>
    <el-table :data="file">
      <el-table-column>
        <template slot-scope="scope">
          <router-link
            @click.prevent.native="click"
            :to="scope.row.url"
            :append="true"
          >{{ scope.row.name }}</router-link>
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
  props: ["displayOption"],
  methods: {
    //点击事件是在beforeRouteUpdate执行之后执行的
    click() {}
  },
  mounted() {
    //如果在url中找到tree就不显示option
    if (this.$route.path.search("tree") != -1) this.displayOption(false);
    //初始化
    axios.get(this.$route.path).then(data => {
      let arr = [];
      data.data.forEach(item => {
        arr.push({
          name: item.name,
          url: "tree/" + item.name
        });
      });
      this.file = arr;
    });
  },
  beforeRouteUpdate(to, from, next) {
    if (to.path.search("options") != -1) {
      next();
      return;
    }
    console.log("routerUpdate");
    if (this.isDisable) {
      next(false);
      return;
    }
    this.isDisable = true;

    if (to.path.search("tree") != -1) this.displayOption(false);
    else this.displayOption(true);

    let arr = [];
    //前进刷新，后退不刷新
    if (judgeGoFroword(from, to)) {
      axios
        .get(to.path)
        .then(data => {
          data.data.forEach(item => {
            arr.push({
              name: item.name,
              url: item.name
            });
          });
          this.file_back.push(this.file);
          this.file = arr;
          this.isDisable = false;
        })
        .catch(() => {
          this.isDisable = false;
        });
    } else {
      this.file_next.push(this.file);
      this.file = this.file_back.pop();
      this.isDisable = false;
    }

    next();
  }
};
</script>

<style scoped>

  #file .file-operate{
  float: right;
  margin-top: 1rem;
}
</style>