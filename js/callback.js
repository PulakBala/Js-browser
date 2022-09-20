function numberOne(){
    console.log('numberOne is called');
}
function numberTwo(callback){
    console.log('number Two');
    callback();
}
console.log(numberOne(numberTwo))