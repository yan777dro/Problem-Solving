// find if two word are anagram 
//time complexity O(n)
function Anamgram(str1, str2){

    if (str1.length !== str2.length) return false;  

    const searchObj = {};

    for (let index of str1){
        searchObj[index] ? searchObj[index]++ : 1;
    }

    for(let index of str2){
        if(!searchObj[index]) return false;
        searchObj[index]--;
    }

    return true;

}
