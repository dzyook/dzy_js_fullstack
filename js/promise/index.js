// // 2秒后resolve 的定时器 同步化
// const p = new Promise((resolve,reject) =>{
//     setTimeout(function(){
//         resolve("2s ok");
//     },2000)
// })
// p.then((data) => {
//     console.log(data);
// })

// console.log(111)
// var po = require("../promise/promise")
// po.fn()

const Promise = require('./promise');

// resolve ? 表示函数正常执行
// reject ?  表示函数执行出错
// 形参 类型是函数
// 将要执行的耗时任务封在executor,实例化时就开始执行
const p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('hello');
    },1000)
    // reject('false');
});

p.then((data) =>{
    console.log(data);
},(err)=>{
    console.log(err);
})
