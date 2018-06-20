// 1. flattern 功能以后慢慢学
// 2. 数组的一些超纲但常用 ，npm 包提供了这种功能
// lodash underscore 
// 3. 代码的宿主环境是 命令行 
// 4. npm init -y package.json 
// 5. yarn add lodash
// 6. 在当前文件中，引入node_modules下的lodash
// 7. 使用它完成flattern,看文档 
// loadsh 是在nodemodules(本地项目中)的npm包, 模块
// let _ = require("lodash");
var arr = [1,2,[3,4],[5,[6,[7]]]];
// let demo = _.flattenDeep(arr);
// console.log(demo);

function f(arr) {
    if(Object.prototype.toString.call(arr) != "[object Array]")
    return;
    var newArr =[];
    function fn(arr) {
        for(var i=0;i<arr.length;i++){
            if(arr[i].length){
                fn(arr[i]);
            }else {
                newArr.push(arr[i]);
            }
        }
    }
    fn(arr);
    return newArr;
}
arr=f(arr);
console.log(arr);

function flattern (arr) {return arr.toString().split(",")}
console.log(flattern(arr));