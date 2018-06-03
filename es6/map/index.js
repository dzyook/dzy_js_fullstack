const dogs = new Map();
dogs.set('Snickers',3);
dogs.set('Sunny',2);
dogs.set('Hugo',10);
dogs.set('Hugo',12);

dogs.forEach((val,key) => {
    console.log(val,key);
})

// 可以迭代的都可以使用 for of
for(const [key,val] of dogs){
    console.log(key,val);
}

let a =1;
let b =2;
[b,a] = [a,b]
console.log(a,b);

   
    
    
