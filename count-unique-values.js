//count unique values in a sorted array
//time complexity O(n)

function CountUniqueValues(arr){

    if (!arr.length) return 0;

    let count = 1;

    for(let i =0; i < arr.length - 1; i++){

        if(arr[i] !== arr[i + 1]) count++;


    }

    return count;

}
