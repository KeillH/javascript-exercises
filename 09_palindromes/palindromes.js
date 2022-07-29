const palindromes = function (forwardString) {
    //Reversing the string
    let reverseStingArray =[];
    let reverseString;
    let forwardStringArray = [];

    //conditioning the forward string to have the punctuation and capitalisation removed and handled correctly
    forwardString = forwardString.toLowerCase();
    for (let i = 0;i<forwardString.length;i++){
        if (forwardString[i] ==='!'||forwardString[i] ==='.'||forwardString[i] ===','||forwardString[i] ===' '){
            continue;
        }else {
            forwardStringArray.push(forwardString[i]);
        }
    }
    forwardString = forwardStringArray.join('');
    

    for (i =forwardString.length-1;i>=0;i--){
        reverseStingArray.push(forwardString[i]);
        
    }
    reverseString = reverseStingArray.join('');
    console.log(reverseString);

    if (forwardString === reverseString){
        return true;
    }else {
        return false;
    }
    


};

// Do not edit below this line
module.exports = palindromes;
