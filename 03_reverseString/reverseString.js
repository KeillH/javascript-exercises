const reverseString = function(string) {
    let reversedArray = []

    for (let i =string.length-1;i>=0;i--){
        reversedArray.push(string[i]);
    }
    let reverse = reversedArray.join("");


    return reverse;

};

// Do not edit below this line
module.exports = reverseString;
