# Longest Consecutive 

## 1st Approach 
```javascipt 

function largestConsecutive(nums){
  let res =[];
    let preEle=0;
  nums.sort((a,b)=>a-b);
for(let i=0;i<=nums.length-1;i++){

  let currentEle=nums[i];
  if(currentEle-1===preEle){
    res.push(currentEle)
  }
  preEle=nums[i];
  
}
return res;
}

let nums=[1,2,3,4, 7];
let res=largestConsecutive(nums);
console.log(res)
```

## 2nd appraoch 
```javascript
function LongestSequnce(arr) {
    let cnt = 0;
    let max = -Infinity;
    let st = new Set();
    for (let i in arr) {
        st.add(arr[i]);
    }

    for (let i in arr) {
        if (st.has(arr[i])) {
            cnt++;
        } else {
            cnt = 0;
        }
        max = Math.max(max, cnt);
    }
    return max;
}

let arr = [2, 3, 5, 6, 4];
let res = LongestSequnce(arr);
console.log(res);
```
