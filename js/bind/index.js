Function.prototype.bind2 = function (context,...args) {
  // console.log(args)
  var that = this
  var args = Array.prototype.slice.call(arguments,1)
  return  function() { 
    console.log(context,args)
    const bindArgs = Array.prototype.slice.call(arguments)
    that.apply(this instanceof that ? this:context,args.concat(bindArgs))
    // console.log(this)
    // bar 是谁? bar -> Function
    // ?.apply(context)
    // that.apply(context)
    // this.apply(context,args)
  }
}

var foo = {
  value: 1
}
function bar(name,age) {
  console.log(this.value)
  console.log(name)
  console.log(age)
}
// bar(name,age)
// bar.call(foo)
// const bar2 = bar.bind(foo);
// bar2()
const bar3 = bar.bind2(foo,'zll');
bar3(18)

// bind ?
// 1 返回一个新的函数, 高阶函数 return function() {}
// this的指向