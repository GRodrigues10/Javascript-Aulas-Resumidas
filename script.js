// Tipos de Variáveis:
let idade = 100;
let nome = 'Duke';
let logado = true;

// console.log(idade);
// console.log(nome);
// console.log(logado);


// array e objetos:

let ingredientes = ['Leite', 'Ovos', 'Chocolate', 'Água', 'Manteiga', 'Fermento', 'Glacê', 'Açúcar'];

// console.log(ingredientes);


let personagem = {
    nome:'Joaquim',
    idade:98,
    vivo:false?'Sim':'Não'
};

// console.log(personagem);

function bomba(){
    return 'BOOOOOOM'
}

let soma = (a, b) => {
    return a + b
}


// console.log(bomba());

let a = 3;
let b = 4;
// console.log(`A soma de ${a} + ${b} é ${soma(3,4)}!`);

idade = 22;

if(idade >= 18){
    console.log('Maior de Idade!');
}else{
    console.log('Não é maior de idade!')
}

let lista = [10, 20, 30, 40];


// for(let i = 0; i < lista.length; i++){
//     console.log(lista[i])
// }

// Forma mais fácil de fazer:
for(item of lista){
    console.log(item);
}