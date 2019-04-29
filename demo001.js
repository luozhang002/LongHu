let   OSS  = require('ali-oss');
const env  = process.env;
const path = require('path');
const fs   = require('fs');

let client = new OSS({
  accessKeyId: env.ALI_SDK_AK_ID,
  accessKeySecret: env.ALI_SDK_AK_SECRET,
  region: 'oss-cn-',
  bucket: 'bucketName'
});

function travel(dir,callback) {
  fs.readdirSync(dir).forEach(function (file) {
    var pathname = path.join(dir,file);

    if (fs.statSync(pathname).isDirectory()) {
      travel(pathname,callback);
    } else {
      callback(file,pathname);
    }
  });
}

let BigArray = [];
travel('./m_ebao',function (file,pathname) {
  console.log(file, pathname)
  BigArray.push(pathname);
})

//切割数组,生成新的数组，如[[1001,1002,1003],[1004,1005,1006]...]
function cutAry(ary,step){
  let newAry = [];
  let l = Math.ceil(ary.length/step);
  for(let i=0;i<l;i++){
    let start = step * i;
    let end = start + step;
    newAry.push(ary.slice(start,end));
  }
  return newAry;
}

let arys = cutAry(BigArray,3);
console.log(arys);
//遍历切割后的数组，每一组同时并发3次请求 用户可以根据自己的业务自己去控制并发数是多少，也不太多，因为同一时间建立多个连接很有可能出现socket hang up.
async function fetchData() {
  let arys = cutAry(BigArray,3);
  for(let ids of arys){
    //将每一组请求生成的promise对象存入一个数组，
    let promiseAry = ids.map(item => {
      return client.put(item, item);
    });
    //Promise.all方法来保证所有请求已完成，并将结果集存入变量results
    try {
      let results = await Promise.all(promiseAry);
      results.forEach(v=>console.log(v));
    } catch (e) {
      console.log(e);
    }
  }
}
//调用
fetchData();
