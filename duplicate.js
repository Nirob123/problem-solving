var name=[3,2,4,5,3,5,3,64,34,34,2,3];
var uniqueName=[];
for(var i=0; i<name.length; i++){
    var element=name[i];
    var index=uniqueName.indexOf(element);
    if(index==-1){
        uniqueName.push(element);
    }
}
console.log(uniqueName);