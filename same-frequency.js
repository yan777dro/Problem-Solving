//our function will find if two positive integers have the same frequency of digits

//time complexity O(n) linear time.


function SameFrequency(num1, num2){

    const  str1= '${num1}';
    const str2 = '${num2}';

    if(str1 !== str2)  return false;

    const search = {};

    for( char of str1){

        search[char] = ++search[char] || 1;

    

    }


    for(char of str2){

    if(search[char]) search[char]--;
    else return false


    }



    return true;





}

console.log(SameFrequency(34, 14)); // false
console.log(SameFrequency(33005, 30503)); // true