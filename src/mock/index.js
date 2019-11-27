import Mock from 'mockjs'
import File from './file'

Mock.mock('/Tsdy/app', 'get', () => {  // 此处会劫持/root/login/checkMemberLogin接口，并返回数据
  return File.file  // 返回模拟数据
})

Mock.mock(/\/*\/*\/*/, 'get', ()=>{
    return File._1file;
})
