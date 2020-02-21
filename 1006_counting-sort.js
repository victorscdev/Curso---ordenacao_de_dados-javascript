var arr = [ 7, 5, 20, 2, 6 ];

function countingSort( arr ) {
    var counts = [];
    var result = [];

    for ( const n of arr ) {

        if ( counts[ n ] ) {
            counts[ n ] += 1

        } else {
            counts[ n ] = 1

        }

    }

    for ( const key of Object.keys( counts ) ) {

        for ( let index = 0; index < counts[ key ]; index++ ) {
            result.push( Number( key ) );
        }

    }

    return result;
}

console.log ( countingSort(arr) );