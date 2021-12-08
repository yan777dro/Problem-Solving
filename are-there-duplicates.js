//our function will take a variable number of arguments and check for duplicates 
//time complexity O(n) 

function areThereDups(...args){

    if(!args.length) return false;

    const searchForDups = {};

    for(const items of args){

        if(searchForDups[items]) return true;
        searchForDups[items] = 1;


    }

    return false;

}