function arraySum(numbers){
    var sum=0;
    for(var i=0; i<numbers.length; i++){
        var element=numbers[i];
        sum=sum+element;
    }
    return sum;

}


var result=arraySum([20,30,40,50,60]);
console.log("total of numbers:",result);