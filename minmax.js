function minmax(arr){
    let min = arr[0];
    let max = arr[0];
    for(let num of arr){
        if(num < min) min = num;
        if(num > max) max = num;
    }
    return{min,max};
}
console.log(minmax([1,2,3,4,5]));

// reverse an array 
function reversea(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr;

}
console.log(reversea([1, 2, 3, 4, 5]));
//
