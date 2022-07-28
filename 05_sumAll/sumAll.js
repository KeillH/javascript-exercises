const sumAll = function(n1,n2) {
    let start;
    let end;
    //Checking for errors 
    if (n1<0 || n2<0){
        return 'ERROR';
    }
    if (typeof(n1)!='number' || typeof(n2)!='number'){
        return 'ERROR';
    }

    //Asigning values in order
    if (n1<n2){
        start = n1;
        end = n2;
    }else {
        start = n2;
        end = n1;
    }
    total=0;
    for (let i=start;i<=end;i++){
        total +=i;
    }
    return total;

};

// Do not edit below this line
module.exports = sumAll;
