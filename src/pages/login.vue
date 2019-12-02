<template>
  <div id="login">
    <div class="login">
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
  </div>
</template>

<script>
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i].trim();
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
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
      let loading = Loading.service({
        target: ".login"
      });
      axios
        .post("/login", {
          username: this.form.username,
          password: this.form.password
        })
        .then(data => {
          loading.close();
          if (data.data.token) {
            document.cookie = "token=" + data.data.token;
            this.$router.replace(data.data.username);
          } else {
            this.$alert(data.data.code, "error");
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  beforeRouteEnter(to, from, next) {
    //同步的判断是否已经处于登陆状态
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/judge-token", false);
    xhr.onload = () => {
      const { username } = JSON.parse(xhr.response);
      if (username) {
          window.location.href = "/" + username;
          return;
      }
      next();
    };
    xhr.send(JSON.stringify({ token: getCookie("token") }));
  }
};
</script>

<style scoped>
#login {
  width: 100%;
  height: 100%;
}
.login {
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
.login .login-box {
  width: 310px;
  height: 320px;
  margin: auto;
}
.login .login-box .el-button {
  width: 100%;
  height: 48px;
}
</style>