var minhaVar = 'minha variavel';


let num = 2;
const pi = 3.14; 

var numeros = [1,2,3]
numeros.map(function(valor){
    return valor*2;
})
numeros.map(valor => valor * 2);

class Matematica{
    soma(x: number,y: number){ //tem especificar que x e y devem ser números e que a função retorna um número
        return x + y;
    }
}