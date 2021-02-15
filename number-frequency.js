// function to find the frequency two numbers can be found in two arrays
//time complexity O(n)

function NumbFreq(numb1, numb1){

    if(numb1 != numb2) return false;

    const obj = {};

    for( const i of numb1){
        obj[i] ? obj[i]++ : 1;
    }

    for(const j of numb2){
        if(!obj[j]) return false;
        obj[j]--
    }

    return true;
}