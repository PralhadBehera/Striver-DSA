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