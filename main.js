const MIN = {
    vertical: 4
}

const MAX = {
    horizontal: 3,
    vertical: 6,
    numero:10
}

function randInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

function generarArrayBidimensional() {
    function generarArray() {
        //return [randInt(10), randInt(10), randInt(10)];
        var linea = []
        for (var i = 1; i <= MAX.horizontal; i++) {
            linea.push(randInt(MAX.numero));
        }
        return linea
    }

    var array = [];
    for (var i = 0; i < MIN.vertical + randInt(MAX.vertical); i++) {
        array.push(generarArray());
    }
    return array;
}

// SOLO PARA linea de comandos
function mostrarArrayBidimensional(arrayBidimensional) {
    arrayBidimensional.forEach(function (array) {
        array.forEach(function(elemento) {
            var formatedElemento = (" " + elemento).slice(-2);
            process.stdout.write(`| ${formatedElemento} `);
        });
        console.log("|");
    });
};

// SOLO PARA WEB
/*
    var table = document.getElementById("table");
    arrayBidimensional.forEach(function (array) {
        var row = "<tr>" + mostrarArray(array) + "</tr>";
        table.innerHTML += row;
    });
*/

arrayBidimensional = generarArrayBidimensional()
console.log(arrayBidimensional)
mostrarArrayBidimensional(arrayBidimensional);