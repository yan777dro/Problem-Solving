// create a function to find if there are duplicates among arguments passed.
//time complexity O(n)

function thereDups(arg){

    if(!arg.length) return false;

    const look = {};

    for(const i of arg){
        if(look[i]) return true;
        look[i] = 1;
    }

    return false;



}