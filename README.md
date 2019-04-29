## demo描述

如何运行: `npm install`配置下自己的AK 、region和bucket即可 然后运行 `node demo001.js` `node demo002.js`

* demo001.js 简单的告诉用户如何控制并发上传数，demo中控制的是3个，具体控制多少用户可根据自己的业务自己参考，因为如果不控制并发数，同一时刻建立的连接多了可能会出现问题。
* demo002.js 分片上传、断点续传、重试次数
