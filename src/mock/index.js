import Mock from 'mockjs'
import File from './repository/file'
import Settings from './repository/settings'
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