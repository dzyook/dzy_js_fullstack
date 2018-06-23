// COMMONJS require NODE 内置支持的js模块化方案
const fs = require('fs');
let data;

const ff = new Promise((resolve,reject)=>{
   fs.readFile('./f2.txt','utf8',(err,data)=>{
        // console.log(err)
        if(!err){
            console.log('真正的读取完成了');
            console.log('文件的内容'+data);
            resolve(data);
        }else{
             reject(err);
        }
    })     
});
ff.then((data)=>{
    console.log('读取完成');
    // console.log(data);
}).catch(e=>{
    console.log(e)
})
