const removeFromArray = function(array, ...args) {
    //For each argument to be removed from the array. The code checks to see if it is present and removes the value if it is.
    //If an argument is there it will continuously check the same argument until all multiples of it are removed and then will head to the next argument
    for (let i =0; i<args.length;i++){
        let searcher = 0; //Variable which is used to let the loop know if an item has been found or not
        while (searcher != -1){
            searcher = array.indexOf(args[i]);
            if (searcher === -1){
                continue;
            } else {
                array.splice(searcher,1);
            }
        }
    }
    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
