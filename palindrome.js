//a palindrome is a word, number or phrase that reads the same backward and forward

//examples:  level, rotor, madam, 9119, 51015

//both solutions have a time complexity of O(n)


//recurseive solution
function palindrome(str){

    if(str.length < 2) return true; 
    
    if(str[0] === str[str.length - 1]){  
        
    
    return palindrome(str.slice(1, str.length -1));
    }
    
    return false;
    
    }
    
    console.log(palindrome("rotor"));
    //true


    //iterative solution
    function Palindrome2(str){

    if(str.length < 2) return true;

    let i = 0;
    let j = str.length - 1;

    while(i < j){

        if(str[i] !== str[j]) return false; // if our string doesn't read equally front and back return false

        i = i + 1;
        j = j - 1;

    }  //iterate through our string front and back and if its palindrome return true

    return true;

    }

    console.log(Palindrome2("level"));

    //true

    console.log(Palindrome2("done"));

    //false

