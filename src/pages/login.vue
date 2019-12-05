<template>
  <div id="login">
      <login-screen></login-screen>
  </div>
</template>

<script>
import loginScreen from '../components/login/login-screen';
import axios from 'axios';
axios.defaults.withCredentials = true

export default {
  components:{
    loginScreen
  },
  beforeRouteEnter(to, from, next) {
    //类同步的判断是否已经处于登陆状态
    axios({
      url:'http://localhost:3000/judge-token',
      method:'POST',
      xsrfCookieName: 'XSRF-TOKEN',
      xsrfHeaderName: 'X-XSRF-TOKEN',
    })
    .then(data => {
        //传回对应username等于登陆状态存在
        if(data.data.username){
          window.location.href = '/' + data.data.username;
          next(false);
        }
        next()
    })
    .catch((err) => {
      console.log(err);
    })

  }
}
</script>

<style scoped>
#login {
  width: 100%;
  height: 100%;
}
</style>