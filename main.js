function randint(max) {
  return Math.floor(Math.random () * max + 1);
}
 
 function generarArrayBidimensional() {
 function generarArray() {
      return [[randint(10)], [randint(10)], [randint(10)],]
   }
 
   var array = [];
   for (var i = 3; i < 10; i++) {
     array.push(generarArray());
   }
   return array;
 }
 function mostrarArrayBidimensional(arrayBidimensional) {
   
   function mostrarArray(array) {
     array.forEach(function (elemento) {
       var formatedElemento = (" " + elemento).slice(-2);
       process.stdout.write(`| ${formatedElemento} `);
     });
     console.log("|");
    }

   function mostrarLinea(numElementos) {
      const lineLength = (numElementos * 4) + 1; // 4 characters per element (| xx ) + 1 for the final |
      for (var i = 0; i < lineLength; i++) {
        process.stdout.write("-");
      }
      console.log();
    }   

    const numElementos = arrayBidimensional[0].length;
    mostrarLinea(numElementos);
    arrayBidimensional.forEach(function (array) {
      mostrarArray(array);
      mostrarLinea(numElementos);
    });
  }
  
  mostrarArrayBidimensional(generarArrayBidimensional());








