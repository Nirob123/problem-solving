function reverseString(str){
var reverse="";
for(var i=0; i<str.length; i++){
    var char=str[i];
    reverse=char+reverse;
}
return reverse;
}
// var text="Hello,i am sakibur rahman i am form bogura";
// var alien=reverseString(text);
// console.log(alien);
var food=reverseString("khida lagche vai vhat khabo");
console.log(food);

