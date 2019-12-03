<template>
  <div id="login">
      <login-screen></login-screen>
  </div>
</template>

<script>
import loginScreen from '../components/login/login-screen';
import axios from 'axios';

export default {
  components:{
    loginScreen
  },
  beforeRouteEnter(to, from, next) {
    //同步的判断是否已经处于登陆状态
    // let xhr = new XMLHttpRequest();
    // xhr.open("POST", "/judge-token", false);
    // xhr.onload = () => {
    //   const { username } = JSON.parse(xhr.response);
    //   if (username) {
    //       window.location.href = "/" + username;
    //       return;
    //   }
    //   next();
    // };
    // xhr.send(JSON.stringify({ token: getCookie("token") }));
    axios({
      url:'/judge-token',
      method:'POST',
      xsrfCookieName:'XSRF-TOKEN',
      xsrfHeaderName:'X-XSRF-TOKEN',
      data:{

      }
    })
    .then(data => {
        // const { username } = JSON.parse(data.data);
        // if(username){
        //   window.location.href = "/" + username;
        //   return;
        // }
        console.log(data)
        next()
    })
    .catch(err => {
      this.$alert(err, 'error');
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