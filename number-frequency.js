// function to find the frequency two numbers can be found in two arrays
//time complexity O(n)

function NumbFreq(numb1, numb2){
    
    numb1 = [];
    numb2 = [];

    if(numb1 != numb2) return false;

    const obj = {};

    for( let i of numb1){
        obj[i] ? obj[i]++ : 1;
    }

    for(let j of numb2){
        if(!obj[j]) return false;
        obj[j]--
    }

    return true;
}
