/**The Fiboacci sequence is a sequence in which number is equal to the sum of the two
numbers before it

for example 1, 1 , 2 , 3, 5, 8, 13, 21, 34, 55  
1 +1 = 2
1+2 = 3
2+3 = 5
3+5 = 8
5+ 8 = 13
8 + 13 = 21
 13 + 21 = 34
 21 + 34 = 55 and so forth

 the next number on the above sequence would be 89 ( 34 + 55)**/



/**our function will take a number and return its Fiboacci sequence 
in an array. **/
 //time complexity O(n)

 function FibonacciSeq(num){

    const numbersArr = [1];
    
    for(let i = 1; i < num; i++){
        numbersArr[i] = number[i-1] + (numbersArr[i-2] || 0);
    }
    return numbersArr;
    
    
       
    }
    
    console.log(FibonacciSeq(20));
    
    //[1, 1 , 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765];
    
