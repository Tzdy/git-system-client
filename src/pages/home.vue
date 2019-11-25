<template>
  <div id="index">
    <el-container class="container">
      <el-aside width="300px" class="left-aside">
        <div class="repository">
          <el-row>
            <el-col :span="18">
              <h4>Repositories</h4>
            </el-col>
            <el-col :span="6">
              <el-button>NEW</el-button>
            </el-col>
          </el-row>
          <el-input class="search" v-model="input" placeholder="请输入内容"></el-input>
          <ul>
            <li v-for="item in repository" :key="item">
              <router-link :to="item">{{ item }}</router-link>
            </li>
          </ul>
        </div>
      </el-aside>
      <el-main class="main">Main</el-main>
      <el-aside width="300px">Aside</el-aside>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      repository: ["Tsdy/app", "Tsdy/text"],
      input: ""
    };
  }
};
</script>


<style scoped>
#index {
  width: 100%;
  height: 100%;
}

.container {
  height: 100%;
}

.left-aside {
  height: 100%;
}
.left-aside .repository {
  margin-top: 2rem;
}
.left-aside .repository .search {
  margin-top: 1rem;
}
.left-aside .repository ul li {
  list-style: none;
  text-indent: 3rem;
}

.main {
  background: rgb(246, 248, 251);
  height: 100%;
}
</style>

