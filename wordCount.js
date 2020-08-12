var speech="i am a boy  i am from sonatola amr gramdwer basri nogurasa  ddgas asdf jasdh"
var count=0;
for(var i=0; i<speech.length; i++){
    var char=speech[i];
    if(char==" " && speech[i-1] !=" " ){
        count++
    }
}
count++
console.log(count);