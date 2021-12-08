//our function will accept a sorted array, count how many unique values are in it and return the count.
//One pointer solution
//time compexity O(n)

function UniqueValuesOnePointer(arr){

    if(!arr.length) return 0;
    
    arr.sort();
    
    let counter = 1;
    
    for(let i = 0; i < arr.length - 1; i++){
    
    if(arr[i] !== arr[i + 1]) counter++;
    
    }
    
    return counter;
    
    }
    
    
    console.log(UniqueValuesOnePointer([10, 20, 30, 40, 50, 60]));  //6
    console.log(UniqueValuesOnePointer([1, 2, 3, 5, 10, 50, 100, 200])); //8
    