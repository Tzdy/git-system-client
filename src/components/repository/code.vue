<template>
  <div id="code">
    <h3>{{ title }}</h3>
    <el-tag class="tag" v-for="item in tag" :key="item">{{ item }}</el-tag>
    
    <router-view :name="option"></router-view>
    <div>
      <router-view name="default" :display-option="displayOption"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "git-system",
      tag: ["javascript", "css", "html"],
      activeIndex: "1",
      option: "options"
    };
  },
  methods: {
    displayOption(judge) {
      if (judge) {
        this.option = "options";
      } else {
        this.option = "";
      }
    }
  }
};
</script>

<style scoped>
#code .tag {
  margin-right: 1rem;
}


</style>