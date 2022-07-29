const fibonacci = function(number) {
    number = parseInt(number,10);
    if (number === 0){return 0;}
    if (number <0){return 'OOPS'}

    let fibPrevious = 0;
    let fibCurrent = 1;
    let temp;
    for (let i =1;i<number;i++){
        temp = fibCurrent;
        fibCurrent = fibCurrent + fibPrevious;
        fibPrevious = temp;
    }


    return fibCurrent;

};

// Do not edit below this line
module.exports = fibonacci;
