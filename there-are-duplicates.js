// create a function to find if there are duplicates among arguments passed.
//time complexity O(n)

function thereDups(arg){

    if(!arg.length) return false;

    const look = {};

    for(let val = 0; val < arg.length; val++){
        if(look[val]) return true;
        look[val] = 1;
    }

    return false;

//if there are duplicates return true otherwise return false

}
