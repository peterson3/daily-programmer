var input1 = [0, -3, 5, -4, -2, 3, 1, 0];
var length1 = 8;

var input2 = [3, -2, 2, 0, 3, 4, -6, 3, 5, -4, 8];
var length2 = 11;


var length3 = 11; 
var input3 = [9, 0, -5, -4, 1, 4, -4, -9, 0, -7, -1];

var length4 = 11; 
var input4 = [9, -7, 6, -8, 3, -9, -5, 3, -6, -8, 5];



function SumArrayValues(array){
	if (array.length == 0){
		return 0;
	}
	
	var sum=0;
	for (let i=0; i<array.length; i++){
		sum += array[i];
	}
	return sum;
}


function getEquilibriaPoints(input, length){
var i= 0;	
var allTransactionsBefore;
var allTransactionsAfter;
var curValue;


	for (i=0; i<length; i++){
	   
	   curValue = input[i];

		if (i==0){
			   allTransactionsBefore = [[0]];
		}
		else{
			   allTransactionsBefore = input.slice(0, i);
		}
	   
	   if (i+1 == length){
		 allTransactionsAfter = [[0]];
	   }
	   else{
		  allTransactionsAfter = input.slice(i+1, length);
	   }
	   
	   //console.log(allTransactionsBefore);
	   //console.log(allTransactionsAfter);
	   //console.log("AllTransactionAfter: " + SumArrayValues(allTransactionsAfter));
	   if (SumArrayValues(allTransactionsAfter) == SumArrayValues(allTransactionsBefore)){
		   console.log(i);
	   }
	}
}


console.log("Input 1: ");
getEquilibriaPoints(input1, length1);
console.log("Input 2: ");
getEquilibriaPoints(input2, length2);
console.log("Input 3: ");
getEquilibriaPoints(input3, length3);
console.log("Input 4: ");
getEquilibriaPoints(input4, length4);
