function Reverse(arr){
    let start=0;
    let end=arr.length-1;
    while(start<end){
      let temp=arr[start];
      arr[start]=arr[end];
      arr[end]=temp;
      start++;
      end--;
    }
    console.log(arr)
  }
  
  let arr1=[1,2,3,4,5];
  Reverse(arr1);
  
  function ReverseArr(arr,start=0,end=arr.length-1){
    if(start<end){
      let temp=arr[start];
      arr[start]=arr[end];
      arr[end]=temp;
      start++;
      end--;
      return ReverseArr(arr,start,end,)
    }
    return arr;
  }
  let arr=[1,2,3,4,5];
  console.log(ReverseArr(arr))