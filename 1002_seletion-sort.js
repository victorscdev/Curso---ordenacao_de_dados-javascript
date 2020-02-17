var arr = [ 7, 5, 20, 2, 6 ];

function selectionSort( arr ) {
    var tamanho_array = arr.length;
    var valor_minimo_temporario = arr[ 0 ];


    for ( var externo = 0; externo < tamanho_array - 1; externo++ ) {
        valor_minimo_temporario = externo;

        for ( var interno = externo + 1; interno < tamanho_array; interno++ ) {
            if ( arr[ valor_minimo_temporario ] > arr[ interno ] ) {
                valor_minimo_temporario = interno;
            }
        }
        if ( arr[ valor_minimo_temporario ] !== arr[ externo ] ) {
            [ arr[ externo ], arr[ valor_minimo_temporario ] ] = [ arr[ valor_minimo_temporario ], arr[ externo ] ]
        }
    }

    return arr
}

console.log ( selectionSort(arr) );