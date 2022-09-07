console.log('first');
console.log('second');
let seconds = 0;
const intervalId =  setInterval(() => {
    console.log(++seconds);
    if(seconds == 10){
        clearInterval(intervalId);
    }
}, 1000);
console.log('fourth');
console.log('fifth');


