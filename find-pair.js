//our function will return true if pairs exists in any given unsorted array. If there no pairs exist, our function will return false

//time complexity O(n)


function findIfPairs(arr, num){

    const obj = {};

    for(const item of arr){
        if(obj[item - num] || obj[item + num]) return true;
        obj[item] = item;





    }

    return false;

}

console.log(findIfPairs([], 2, 3, 4)); // false
console.log(findIfPairs( [9,9], 0)); // true