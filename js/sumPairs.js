
function sumPairs(arr, num){
    ans = []
    for(let i = 0; i < arr.length; i++){
        for(let j = arr.length-1; j > i; j--){
            //console.log(arr[i], arr[j])
            if(arr[i]+arr[j]===num)
                ans.push([arr[i],arr[j]])
        }
    }

    return ans
}


console.log(sumPairs([1,2,3,4,5], 7))
//exports.sumPairs = {sumPairs}
