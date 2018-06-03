let mySet = new Set();
mySet.add(1);
mySet.add(5);
mySet.add(5);

for(const num of mySet) {
    console.log(num);
}

console.log(mySet.size);
mySet.delete(5);
console.log(mySet);