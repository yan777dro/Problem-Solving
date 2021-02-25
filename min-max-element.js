//find min / smallest element of an array
//time complexity O(n)
function MinElement(arr){
const min = arr[0];

for (let index of arr){
    if(arr[index] < min)
    min = arr[index];
}
return min;
}

//find max/largest element of an array
//time complexity O(n)

function max(arr){

    const max = arr[0];

    for ( let index of arr){
        if (arr[index] > max)
        max = arr[index];
    }
return max;

}
