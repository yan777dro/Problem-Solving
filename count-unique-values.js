//count unique values in a sorted array
//time complexity O(n)

function CountUniqueValues(arr){

    if (!arr.length) return 0;

    const count = 1;

    for(index of arr){

        if(arr[index] == arr[index + 1]) return count;


    }

    count++;

}
