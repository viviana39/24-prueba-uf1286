function generarNumeroAlAzar(max) {
  return Math.floor(Math.random() * (max + 1))
}

function generarArrayBidimensional() {
  function generarArray() {
    return [0, 8, 33];
  }

  var array = [];
  for (var i = 0; i < 20; i++) {
    array.push(generarArray());
  }
  return array;
}

function mostrarArrayBidimensional(arrayBidimensional) {
  function mostrarArray(array) {
    array.forEach(function (elemento) {
      var formatedElemento = (" " + elemento).slice(-6);
      process.stdout.write(`| ${formatedElemento} `);
    });
    console.log("|");
  }

  function mostrarLinea() {
    for (var i = 0; i < 20; i++) {
      process.stdout.write("-");
    }
    console.log("-");
  }

  mostrarLinea();
  arrayBidimensional.forEach(function (array) {
    mostrarArray(array);
    mostrarLinea();
  });
}





