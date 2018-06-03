const arr = [1, 2, 3, 4, 1, 4, 5, 3];
function unique(arr) {
    if(!Array.isArray(arr)){
        console.log('type error');
        return;
    }
    // 类数组 for of
    return Array.from(new Set(arr));
}
console.log(unique(arr));