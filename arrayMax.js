var marks=[20,34,45,65,34,67,67,56,34,90,92,96,88,85,88,70,80];
var max=marks[0];
for(var i=0; i<marks.length; i++){
  
    var element=marks[i];
    if(element>max){
        max=element;
    }
}
    

console.log("highest value is:", max);
