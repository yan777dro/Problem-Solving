//min / smallest element of an array
//time complexity O(n)
function MinElement(arr){
const min = arr[0];

for (let i of arr){
    if(arr[i] < min)
    min = arr[i];
}
return min;
}

//max/largest element of an array
//time complexity O(n)

function max(arr){

    const max = arr[0];

    for ( let j of arr){
        if (arr[i] > max)
        max = arr[i];
    }
return max;

}