function primeira(){
    console.log('primeira');
}

function segunda(){
    console.log('segunda');
}
let cont=0;
//Disparo assincrono
setInterval(primeira,1000);
setInterval(segunda,2000);