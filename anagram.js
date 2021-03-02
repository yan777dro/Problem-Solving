// find if two word are anagram 
//if the two words are anagram of each other return true, otherwise false
//time complexity O(n)
function Anamgram(str1, str2){

    if (str1.length !== str2.length) return false;  

    const searchObj = {};

    for (let char of str1){
        searchObj[char] ? searchObj[char]++ : 1;
    }

    for(let char of str2){
        if(!searchObj[char]) return false;
        searchObj[char]--;
    }

    return true;

}
