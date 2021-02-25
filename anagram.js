// find if two word are anagram 
//time complexity O(n)
function Anamgram(str1, str2){

    if (str1.length !== str2.length) return false;  

    const searchObj = {};

    for (let i of str1){
        searchObj[i] ? searchObj[i]++ : 1;
    }

    for(let j of str2){
        if(!searchObj[j]) return false;
        searchObj[j]--;
    }

    return true;

}
