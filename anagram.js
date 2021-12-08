//time compexity O(n)  performance will grow linearly in proportion to the input data

function isAnagram (str1, str2) {

    if(str1.length !== str2.length) return false;

    const obj = {};

    for(const char of str1){

        obj[char] = ++obj[char] || 1;

    }

    for(const char of str2){
        
        if (obj[char]) obj[char]--;
        else return false;

    }

    return true;




}


console.log(isAnagram("elbow", "below"));  //true

console.log(isAnagram("dusty", "study"));  //true

console.log(isAnagram("car", "carpet"));   //false

