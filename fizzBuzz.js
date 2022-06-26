const resultado = fizzBuzz(10);
console.log(resultado);

function fizzBuzz(entrada){
if (typeof entrada !== 'number')
return 'Não é um número' ;
if ((entrada % 3 === 0) && (entrada % 5 === 0))
return 'fizzBuzz';
if (entrada % 3 === 0)
return 'Fizz';
if (entrada % 5 === 0)
return 'Buzz';

return entrada;
}
