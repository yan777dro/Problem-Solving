//count unique values in a sorted array
//time complexity O(n)

function CountUniqueValues(arr){

    if (!arr.length) return 0;

    let count = 1;

    for(let val of arr){

        if(arr[val] !== arr[val + 1]) count++;


    }

    return count;

}
