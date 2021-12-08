//our function will accept a sorted array, count how many unique values are in it and return the count.
//time compexity O (n log n)

function countUniqueValues(arr){

    if(!arr.length) return false;
    
    arr.sort();
    
    let counter  = 1;
    
    
    for(let i = 0, j = 1; j < arr.length; i++, j++){
    
    if(arr[i] !== arr[j]) counter++;
    
    }
    
    return counter;
    
    
    }
    
    
    console.log(countUniqueValues([10, 20, 30, 40, 50, 60]));  //6
    console.log(countUniqueValues([1, 2, 3, 5, 10, 50, 100, 200])); //8
    