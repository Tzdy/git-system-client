<template>
  <div id="login-screen">
    <div class="login-box">
      <el-form ref="form" :model="form" label-position="top" label-width="80px">
        <el-form-item label="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="password">
          <el-input v-model="form.password" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="submit" type="success" @click="onSubmit">sign in</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Loading } from "element-ui";
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    onSubmit() {
      //加载遮盖登录框
      let loading = Loading.service({
        target: ".login"
      });
      axios({
        url:'/login',
        method:'POST',
        data:{
          username:this.form.username,
          password:this.form.password
        },
        timeout:2000
      })
        .then(data => {
          loading.close();
          //请求成功后会拿到一个令牌，反之为undefined
          if (data.data.token) {
            document.cookie = "XSRF-TOKEN=" + data.data.token;
            this.$router.replace(data.data.username);
          } else {
            this.$alert(data.data.code, "error");
          }
        })
        .catch(err => {
          this.$alert(err, "error");
        });
    }
  }
};
</script>

<style scoped>
#login-screen {
  width: 340px;
  height: 350px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -170px;
  margin-top: -215px;
  border: 1px solid #d8dee2;
  border-radius: 5px;
  display: flex;
}
#login-screen .login-box {
  width: 310px;
  height: 320px;
  margin: auto;
}
#login-screen .login-box .el-button {
  width: 100%;
  height: 48px;
}
</style>