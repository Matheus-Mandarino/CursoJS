imparPar(10);
function imparPar(limite) {
    for (let i = 0; i <= limite; i++) {
    if (i % 2 === 0)
    console.log(i,'Par');
    else
    console.log(i,'Impar');
    }
}