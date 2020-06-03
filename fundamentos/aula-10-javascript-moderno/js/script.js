'use strict'; // O JavaScript acusa mais erros

// var x let
function withVar() {
  for (var i = 0; i < 10; i++) {
    //  console.log('var' + i);
  }
  i = 20;
  //console.log(i);
}

// let tem escopo reduzido
function withLet() {
  for (let i = 0; i < 10; i++) {
    //   console.log('let' + i);
  }
  // i = 20; //vai acusar erro
  //console.log(i);
}

//const - não podemos reatribuir valores.
const c = 10;
//c = 20; // vai acusar erro

const d = [];
d.push(1); //internamente posso modificar arrays e
// objetos nao garante a imutabilidade total

withVar();
withLet();

//funções
function sum(a, b) {
  return a + b;
}
console.log(sum(2, 3));

const sum2 = function (a, b) {
  //função anônima
  return a + b;
};
console.log(sum2(2, 3));

//arrow function
const sum3 = (a, b) => {
  return a + b;
};
console.log(sum3(2, 3));

//arrow function reduzida
const sum4 = (a, b) => a + b;
console.log(sum4(2, 3));

// template literals

const name = 'Eduarda';
const surName = 'Ferreira';
const text1 = 'Meu nome é ' + name + '' + surName;
const text2 = `Meu nome é ${name} ${surName}`;

console.log(text1);
console.log(text2);

//default parametres

const sum5 = (a, b = 10) => a + b; //padrão default caso não venha o valor.
//sempre só no segundo ou nos dois juntos, somente no primeiro não funciona
console.log(sum5(2));
