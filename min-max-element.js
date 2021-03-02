//find min / smallest element of an array
//time complexity O(n)
function MinElement(arr){
const min = arr[0];

for (let value of arr){
    if(arr[value] < min)
    min = arr[value];
}
return min;
}

//find max/largest element of an array
//time complexity O(n)

function max(arr){

    const max = arr[0];

    for ( let value of arr){
        if (arr[value] > max)
        max = arr[value];
    }
return max;

}
