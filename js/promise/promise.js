/*
 * author dzy
 * date 2018-6-21
 * 模块提供Promise类
 */
class Promise  {
    constructor(executor) {
        // 成功的值
        // promise 状态有几种?
        // pending 等待
        // resolved 成功
        // rejected 失败
        this.status = 'pending';
        this.value = undefined;
        this.reason = undefined;
        let resolve = (value) => {
            console.log()
            if(this.status === 'pending'){
                this.value = value; 
                this.status = 'resolved'
            }
        }
        let reject = (reason) => {
            if(this.status === 'pending'){
            this.reason = reason;
            this.status = 'rejected'
            }
        }
        executor(resolve,reject);
    }
    then (onFullFilled,onRejected) {
        if(this.status === 'resolved') {
            onFullFilled(this.value);
        }else if(this.status === 'rejected'){
            onRejected(this.reason);
        }
    }
}

module.exports = Promise