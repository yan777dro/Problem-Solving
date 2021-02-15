// find if two word are anagram 
//time complexity O(n)
function Anamgram(str1, str2){

    if (str1.length !== str2.length) return false;  

    const searchObj = {};

    for (const char of str1){
        searchObj[char] ? searchObj++ : 1;
    }

    for(const key of str2){
        if(!searchObj[key]) return false;
        searchObj[key]--;
    }

    return true;

}
