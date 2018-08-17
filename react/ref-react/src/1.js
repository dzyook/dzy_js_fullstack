// var obj = {
//   name: 'bad',
//   abm: () => {
//     console.log(this)
//     console.log('a')
//     console.log(this.name)
//   }
// }
// let aaa = obj.abm
// obj.abm()
// aaa()
var obj = {
  age: 18,
  getAge: function () {
    var b = this.age;
    var that = this
    var aa = function () {
      console.log(that.age);
    }
    return aa();
  }
}
console.log(obj.getAge())