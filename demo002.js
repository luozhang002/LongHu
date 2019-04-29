let   OSS  = require('ali-oss');
const env  = process.env;
const path = require('path');
const fs   = require('fs');
let filePath = './source/1.pdf';

let client = new OSS({
  accessKeyId: env.ALI_SDK_AK_ID,
  accessKeySecret: env.ALI_SDK_AK_SECRET,
  region: 'oss-cn-',
  bucket: 'bucketName'
});

let checkpoint;

const progress = async function progress(p, cpt) {
  checkpoint = cpt;
  console.log(p)
};

async function resumeUpload() {
  for (let i = 0; i < 5; i++) {
    console.log("重试"+ i );
    try {
      const result = await client.multipartUpload('object-name', filePath, {
        checkpoint,
        progress
      })
      console.log(result);
      break; // break if success
    } catch (e) {
      console.log(e);
    }
  }
}

resumeUpload();
