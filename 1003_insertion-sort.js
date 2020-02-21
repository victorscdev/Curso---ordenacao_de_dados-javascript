var arr = [ 7, 5, 20, 2, 6 ];

function insertionSort( arr ) {
    var valor_atual_temporario;
    var tamanho_array = arr.length;

    for ( var externo = 1; externo < tamanho_array; externo++ ) {
        var interno = externo - 1;
        valor_atual_temporario = arr[ externo ];

        while ( interno >= 0 && valor_atual_temporario < arr[ interno ] ) {
            arr[ interno + 1 ] = arr[ interno ];
            interno--;
        }

        arr[ interno + 1 ] = valor_atual_temporario;
    }

    return arr;
}

console.log ( insertionSort(arr) );