window.addEventListener('load', start);

function start() {
  var red = document.querySelector('#range-vermelho').value;
  var green = document.querySelector('#range-verde').value;
  var blue = document.querySelector('#range-azul').value;

  document.querySelector('#text-r').value = red;
  document.querySelector('#text-g').value = green;
  document.querySelector('#text-b').value = blue;

  mudarCor(red, green, blue);

  document.getElementById('range-vermelho').addEventListener('input', start);
  document.getElementById('range-verde').addEventListener('input', start);
  document.getElementById('range-azul').addEventListener('input', start);
}

function mudarCor(red, green, blue) {
  var color = 'rgb(' + red + ',' + green + ',' + blue + ')';
  result.style.backgroundColor = color;
}
