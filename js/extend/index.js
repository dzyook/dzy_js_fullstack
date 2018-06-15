// es6 class 只是语法糖
function Person(name) {
    this.name = name
}

Person.prototype = {
    getName:function() {
        return this.name;
    }
}
// new Person()

function Author(name,books) {
    Person.call(this,name);//构造函数
    this.books = books
}

extend(Author,Person);
Author.prototype.getBooks = function() {
    return this.books;
}

function extend(subClass,superClass) {
    // var F = function() {}; //空的构造函数
    subClass.prototype = new superClass();
    // constructor属性丢失了
    subClass.prototype.constructor = subClass;
}
const author = new Author('高尔基',['童年']);
console.log(author.getName())

const person = new Person('周杰伦');
console.log(person.constructor.prototype);