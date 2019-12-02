import Mock from 'mockjs'
import File from './repository/file'
import Settings from './repository/settings'
import User from './index/login'
Mock.setup({
  timeout: 2000
})
Mock.mock('/Tsdy/app', 'get', () => {  // 此处会劫持/root/login/checkMemberLogin接口，并返回数据
  return File.file  // 返回模拟数据
})

Mock.mock('/Tsdy/app/tree/apple', 'get', ()=>{
    return File._1file;
})

Mock.mock('/Tsdy/app/tree/apple/egg', 'get', ()=>{
  return File._2file;
})

Mock.mock('/Tsdy/app/tree/apple/egg/asd', 'get', ()=>{
  return File._3file;
})

// repository/settings

Mock.mock('/Tsdy/app/settings', 'get', ()=>{
  return Settings.settings;
})

Mock.mock('/login', 'post', (option) => {
  const {username, password} = JSON.parse(option.body);
  if(username != User.user.username)
    return {code:'账号不存在'}
  if(password != User.user.password)
    return {code:'密码不正确'}  
  return User.user;
})

Mock.mock('/judge-token', 'post', (option) =>{
  let body = JSON.parse(option.body);
  if(body.token == User.user.token)
    return User.token;
  else
    return {code:-1}  
})