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
    var troca_posicao;
    var tamanho_array = arr.length - 1;

    do {
        troca_posicao = false;

        for ( let interno = 0; interno < tamanho_array; interno++ ) {

            if ( arr[ interno ] > arr[ interno + 1 ] ) {

                [ arr[ interno ] , arr[ interno + 1 ] ] = [ arr[ interno + 1 ] , arr[ interno ] ];
                troca_posicao = true;
            }

        }

        tamanho_array--;

    } while (troca_posicao);

    return arr;
}

console.log ( bubbleSort(arr) );