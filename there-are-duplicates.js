// create a function to find if there are duplicates among arguments passed.
//time complexity O(n)

function thereDups(...arg){

    if(!arg.length) return false;

    const look = {};

    for(let i = 0; i < arg.length; i++){
        if(look[i]) return true;
        look[i] = 1;
    }

    return false;

//if there are duplicates return true otherwise return false

}
