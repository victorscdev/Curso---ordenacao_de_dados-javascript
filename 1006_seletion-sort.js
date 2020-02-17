var arr = [ 7, 5, 20, 2, 6 ];

function selectionSort( arr ) {
    var tamanho_array = arr.length;
    var valor_minimo = arr[ 0 ];
    var tmp;


    for ( var i = 0; i < tamanho_array - 1; i++ ) {
        valor_minimo = i;

        for ( var j = i + 1; j < tamanho_array; j++ ) {
            if ( arr[ valor_minimo ] > arr[ j ] ) {
                valor_minimo = j;
            }
        }
        if ( arr[ valor_minimo ] !== arr[ i ] ) {
            tmp = arr[ i ];
            arr[ i ] = arr[ valor_minimo ];
            arr[ valor_minimo ] = tmp;
        }
    }

    return arr
}

console.log ( selectionSort(arr) );