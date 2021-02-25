// create a function to find if there are duplicates among arguments passed.
//time complexity O(n)

function thereDups(arg){

    if(!arg.length) return false;

    const look = {};

    for(let index of arg){
        if(look[index]) return true;
        look[index] = 1;
    }

    return false;

//if there are duplicates return true otherwise return false

}
