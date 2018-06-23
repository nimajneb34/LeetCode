//Longest Substring Without Repeating Characters

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let sarray = [...s], strarrays=[[]], longestarraylength=0;
    for(let i=0; i<sarray.length; i++){
        
    }
        
    // for(let i=0,j=0; i<sarray.length; i++){
    //     if(strarrays[j].indexOf(sarray[i])===-1){
    //         strarrays[j]?strarrays[j].push(sarray[i]) : strarrays[j]=new Array(sarray[i]);
    //     }else{
    //         if(strarrays[j].length>longestarraylength){longestarraylength=strarrays[j].length}
    //         j++;
    //         strarrays[j]=new Array(sarray[i]);
    //     }
    // }
    
    return longestarraylength;
};

//console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("dvdf"));