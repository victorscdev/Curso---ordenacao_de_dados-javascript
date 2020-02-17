var arr = [ 7, 5, 20, 2, 6 ];

// esse é o jeito mais simples de fazer o bubbleSort e a sua complexidade é de O(n²)
// function bubbleSort( arr ) {
//     for ( let externo = 0; externo < arr.length - 1; externo++ ) {

//         for ( let interno = 0; interno < arr.length -1; interno++ ) {

//             if ( arr[ interno ] > arr[ interno + 1 ] ) {
//                 [ arr[ interno ], arr[ interno + 1 ] ] = [ arr[ interno + 1 ], arr[ interno ] ]
//             }

//         }

//     }
//     return arr
// }

// console.log ( bubbleSort(arr) );

// esse é o jeito mais complexo de fazer o bubbleSort e a sua complexidade é de O(n)
function bubbleSort( arr ) {
    var troca;
    var externo = arr.length - 1;

    do {
        troca = false;

        for ( let interno = 0; interno < externo; interno++ ) {

            if ( arr[ interno ] > arr[ interno + 1 ] ) {

                [ arr[ interno ] , arr[ interno + 1 ] ] = [ arr[ interno + 1 ] , arr[ interno ] ];
                troca = true;
            }

        }

        externo--;

    } while (troca);

    return arr;
}

console.log ( bubbleSort(arr) );