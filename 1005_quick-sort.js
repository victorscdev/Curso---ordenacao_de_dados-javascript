var arr = [ 7, 5, 20, 2, 6 ];

function quickSort( arr ) {
    var tamanho_array = arr.length;
    var pivot = arr[ 0 ];

    if ( tamanho_array === 0 ) return [];
    if ( tamanho_array === 1 ) return arr;

    var head = arr.filter( n => n < pivot );
    var equal = arr.filter( n => n === pivot );
    var tail = arr.filter( n => n > pivot );

    return quickSort( head ).concat( equal ).concat( quickSort( tail ) );
}

console.log ( quickSort(arr) );