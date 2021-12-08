//our function will search  through an asorted array and check whether there are duplicates. Using two pointers
// Our array will also need to be sorted in order to use two pointers.  i and j will be our pointers
//time compexity O(n log n) 

function areThereDups(...args){
    if(!args.length) return false;

    args.sort();

    for(let i = 0, j = 1; j < args.length; i++, j++){

        if(args[i] === args[j]) return true;
    }


return false;

}
console.log(areThereDups(1, 2, 3, 4, 5)); // false
console.log(areThereDups('a', 'b', 'c', 'c', 'd', 'e', 'f', 'f', )); // true
