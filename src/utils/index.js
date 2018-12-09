// 封装hxios.get
let baseUrl="https://autumnfish.cn/wx/"
let hxios={
  get(url){
    // 发送请求 pormise
    return new Promise((resolve,reject)=>{
      wx.request({
       url:baseUrl+url,
      // data:'data',
      method:'get',
      dataType:'json',
       success:res=>{
      resolve(res)
      },
      fail:()=>{
        reject()
        },
      complete:()=>{},
       });
       })  
  }
}

export default hxios;