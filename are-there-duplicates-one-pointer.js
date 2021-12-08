// our function will check if there are duplicates given a sorted array. For this solution we will use one pointer.

//time complexity O(n)

// Solution with one pointer (one variable)

function areThereDuplicatesWithOnePointer(...args) {
    if (!args.length) return false;
  
    args.sort();
  
    for (let i = 0; i < args.length - 1; i++) {
      if (args[i] === args[i + 1]) return true;
    }
  
    return false;
  }