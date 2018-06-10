const utils = {
    // 帮忙method执行的次数在规定的时间内只有一次
    // method执行时,函数内的this purFullPage
    // this.container
    throttle(method,context,delay) {
        // args? context 上下文执行环境
        // 返回的函数就是等下事件执行的真正函数体
        // 闭包
        let wait = false;
        return function(...args){
            // method this 指向window
            // args? event 对象
            // 执行时,上下文环境要跟以前一样                         
            // console.log(args);  
            if(!wait){
                method.apply(context,args); 
                wait = true; 
                setTimeout(() =>{
                wait = false;
                },delay)
            }  
        }
            }
        
           
}