<template>
  <div id="index">
    <el-container>
      <el-header>
        <div class="header-box">
          <logo></logo>
          <header-nav></header-nav>
        </div>
      </el-header>
      <el-main>
        <div class="register">
          <div class="register-box">
            <el-form ref="form" :model="form" label-width="80px" label-position="top">
              <el-form-item label="username">
                <el-input :v-model="form.username"></el-input>
              </el-form-item>
              <el-form-item label="Email">
                <el-input :v-model="form.email"></el-input>
              </el-form-item>
              <el-form-item label="password">
                <el-input :v-model="form.password" show-password></el-input>
              </el-form-item>
              <el-form-item>
                <el-button class="submit" type="success" @click="onSubmit">sign up</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </el-main>
      <el-footer></el-footer>
    </el-container>
  </div>
</template>

<script>
import headerNav from "../components/index/header/nav";
import logo from "../components/public/logo";
export default {
  data() {
    return {
      form: {
        username: "",
        email: "",
        password: ""
      }
    };
  },
  components: {
    headerNav,
    logo
  },
  methods: {
    onSubmit() {
      console.log(this.form);
    }
  },
  mounted() {
    console.log(this.$route);
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
#index {
  width: 100%;
  height: 100%;
}
.el-container {
  height: 100%;
  width: 100%;
}
.el-header {
  height: 72px;
  background: #409eff;
  position: relative;
}
.el-header .header-box {
  height: 100%;
  width: 90%;
  position: absolute;
  left: 50%;
  margin-left: -45%;
  display: flex;
}

.register {
  height: 520px;
  width: 426px;
  border-radius: 2px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  position: absolute;
  right: 160px;
  top: 50%;
  margin-top: -260px;
}
.register-box {
  position: absolute;
  width: 80%;
  height: 80%;
  left: 50%;
  top: 50%;
  margin-top: -40%;
  margin-left: -40%;
}
.register-box .submit {
  margin-top: 48px;
  height: 48px;
  width: 100%;
}
.el-main {
  height: 100%;
  width: 100%;
}
</style>