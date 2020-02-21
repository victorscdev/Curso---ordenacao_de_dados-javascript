var arr = [ 7, 5, 20, 2, 6 ];

function insertionSort( arr ) {
    var atual;

    for ( var i = 1; i < arr.length; i++ ) {
        var j = i - 1;
        atual = arr[ i ];

        while ( j >= 0 && atual < arr[ j ] ) {
            arr[ j + 1 ] = arr[ j ];
            j--;
        }

        arr[ j + 1 ] = atual;
    }

    return arr;
}

console.log ( insertionSort(arr) );