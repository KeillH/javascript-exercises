const add = function(n1,n2) {
  return n1+n2;
	
};

const subtract = function(n1,n2) {
  return n1-n2;
	
};

const sum = function(arraySum) {
  let total=0;
  for (let i of arraySum){
    total+=i;
  }
  return total;
};

const multiply = function(arrayMultiply) {
  let total = arrayMultiply[0];
  for (let i=1;i<arrayMultiply.length;i++){
    total*=arrayMultiply[i];
  }
  return total;
};

const power = function(n1,n2) {
  return n1**n2;
	
};

const factorial = function(number) {
  total = 1;
  for (let i =1;i<=number;i++){
    total*=i;
  }
  return total;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
