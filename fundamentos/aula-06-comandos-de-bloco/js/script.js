console.log('JavaScript em funcionamento!');

// Comparando 2 números com if/else
var a = 3;
var b = 5;

if (a < b) {
  console.log(a + ' é menor que ' + b);
} else {
  if (a > b) {
    console.log(a + ' é maior que ' + b);
  } else {
    console.log(a + ' e ' + b + ' são iguais');
  }
}

// Validação de dia com if/else
var day = 1;

if (day === 1) {
  console.log('Domingo');
} else {
  if (day === 2) {
    console.log('Segunda-feira');
  } else {
    if (day === 3) {
      console.log('Terça-feira');
    } else {
      if (day === 4) {
        console.log('Quarta-feira');
      } else {
        if (day === 5) {
          console.log('Quinta-feira');
        } else {
          if (day === 6) {
            console.log('Sexta-feira');
          } else {
            if (day === 7) {
              console.log('Sábado');
            } else {
              console.log('Dia inválido');
            }
          }
        }
      }
    }
  }
}

// Validação de dia com switch
switch (day) {
  case 1:
    console.log('Domingo');
    break;
  case 2:
    console.log('Segunda-feira');
    break;
  case 3:
    console.log('Terça-feira');
    break;
  case 4:
    console.log('Quarta-feira');
    break;
  case 5:
    console.log('Quinta-feira');
    break;
  case 6:
    console.log('Sexta-feira');
    break;
  case 7:
    console.log('Sábado');
    break;
  default:
    console.log('Dia inválido');
}

// Comparando 2 números com operador ternário
var compareResult = a > b ? 1 : a < b ? -1 : 0;

// Verificando dia da semana com operador ternário
var weekDay =
  day === 1
    ? 'Domingo'
    : day === 2
    ? 'Segunda-feira'
    : day === 3
    ? 'Terça-feira'
    : day === 4
    ? 'Quarta-feira'
    : day === 5
    ? 'Quinta-feira'
    : day === 6
    ? 'Sexta-feira'
    : day === 7
    ? 'Sábado'
    : 'Dia inválido';
