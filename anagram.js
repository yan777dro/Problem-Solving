// find if two word are anagram 
//if the two words are anagram of each other return true, otherwise false
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
