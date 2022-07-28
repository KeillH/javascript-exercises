const repeatString = function(string, n) {
    let output;
    if (string.length === 0){
        output = '';

    }
    if (n>=0){
        output = string.repeat(n);
    }
    if (n<0){
        output = 'ERROR';
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
