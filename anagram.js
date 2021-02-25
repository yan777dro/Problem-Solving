// find if two word are anagram 
//time complexity O(n)
function Anamgram(str1, str2){

    if (str1.length !== str2.length) return false;  

    const searchObj = {};

    for (let char of str1){
        searchObj[char] ? searchObj++ : 1;
    }

    for(let char of str2){
        if(!searchObj[char]) return false;
        searchObj[char]--;
    }

    return true;

}
