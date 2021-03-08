//find min / smallest element of an array
//time complexity O(n)
function MinElement(arr){
const min = arr[0];

for (let i =0; i < arr.length, i++){
    if(arr[i] < min)
    min = arr[i];
}
return min;
}

//find max/largest element of an array
//time complexity O(n)

function max(arr){

    const max = arr[0];

    for ( let j =0; j < arr.length; j++){
        if (arr[j] > max)
        max = arr[j];
    }
return max;

}
