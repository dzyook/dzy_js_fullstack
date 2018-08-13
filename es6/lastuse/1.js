// function a () {
//   console.log('111') 
// }
// function b () {
//   return 1+a()
//   console.log('222')
// }
// b()

function a (n) {
  if(n<=1) return 1;
  else return a(n-1) + a(n-2)
}
console.log(a(20))