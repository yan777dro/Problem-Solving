// function to find the frequency two numbers can be found in two arrays
//time complexity O(n)

function NumbFreq(numb1, numb2){
    
    numb1 = [];
    numb2 = [];

    if(numb1.length != numb2.length) return false;

    const obj = {};

    for( let index of numb1){
        obj[index] ? obj[index]++ : 1;
    }

    for(let index of numb2){
        if(!obj[index]) return false;
        obj[index]--
    }

    return true;
}
