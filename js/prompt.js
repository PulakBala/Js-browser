const showAlert=()=>{
    const num = Math.random()*20;
    console.log(num)   
    if(num < 5) {
        alert(`
            Hi i am pulak
        `);
    }
}

const askSomething=()=>{
    const decision = confirm('are you coming picnic');
    if(decision === true){
        alert('bondhu 500 taka bikash kor')
    } else{
        alert('kno taka nai aile ay noile thak')
    }
}

const getUserInfo=()=>{
    const info = prompt('Tell us your bf name');
    if(!!info){
        console.log('welcome here', info);
    }
}