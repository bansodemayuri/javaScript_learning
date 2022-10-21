var num1 = -5;
 var result = num1 > 0 ? "Positive" : "Negative";
 console.log(result);

 var wordLengthSquare = function(word){
    var wordLength = word.length;
    return wordLength * wordLength;
 }
 console.log(wordLengthSquare("JavaScript"));
 wordLengthSquare("Google");
 var givenStringLength = "I am Angular Developer".length;
 var result = "I am Angular Developer".split(" ");
 var total_words = result.length;
 givenStringLength / total_words;


 var greater_number = function(num1,num2){
    var result = num1 > num2  ? num1 : num2;
    console.log(result);
 }
 greater_number(10,-10);
 greater_number(800,899);

 var isEvenOrOdd = function(num1){
    var result = num1%2==0 ? true : false;
    return result;
 }
isEvenOrOdd();



