//linear search.  Time Complexity O(n), performs at O(n) on smaller sorted or unsorted arrays.


/**For large arrays, binary search is ideal.
 * However, binary search can only be implemented on sorted arrays**/


 function linearSearch(arr, key){

    for(elements of arr){
        if(arr[elements] === key) return elements;
    }

    return -1


 }