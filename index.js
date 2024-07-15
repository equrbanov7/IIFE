// function createCounter() {
//     let count = 0;

//     function counter() {
//         count++;
//         console.log(count);
//         return count;
//     }

//     return counter;
// }

// let counter = createCounter();

// counter();
// counter();
// counter();
// counter();

// function setState(initialvalue) {
//     let count ;

//    // console.log(initialvalue)
//     function counter(value) {

//         //console.log(value)
//         // count++;
//         //console.log(count);
//         if (value) {
//             count = value
//         } else {
//             count = initialvalue
//         }

//         return value;
//     }
//         console.log(count)
//     return [count, counter];
// }

// var [someVar, setSomeVar] = setState(5);

// // setSomeVar(4)
//  setSomeVar(2)

// console.log(someVar)


function setState(initialValue) {
    let count = initialValue;

    function counter(value) {
        if (value !== undefined) {
            count = value;
        }
        return count;
    }

    return [() => count , counter];
}

var [getSomeVar, setSomeVar] = setState(5);

setSomeVar(18);

console.log(getSomeVar()); 
