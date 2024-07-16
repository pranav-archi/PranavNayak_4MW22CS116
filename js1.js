function findMax(arr){
    let maxValue=arr[0]
    for(let item=0;item<arr.length;item++){
        if (arr[item]>maxValue) {
            maxValue=arr[item]
        }
    }
    return maxValue
}
let numbers=[1,4,5,7,8,10]
let result = findMax(numbers);
console.log(result);