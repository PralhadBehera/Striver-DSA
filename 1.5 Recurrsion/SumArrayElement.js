let arr=[1,2,3,4,5];
function print(arr){
    let n=arr.pop();
    return n===0?n:n+print(arr);
}

console.log(print(arr))
