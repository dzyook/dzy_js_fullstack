function flatten(arr) {
    // 削藩
    return arr.reduce(function(prev,next){
        // console.log(prev,next);
        return prev.concat(Array.isArray(next)? flatten(next):next)
    },[])
}
console.log(flatten([1,2,[3,4],[5,[6,7]]]))