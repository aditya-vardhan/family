// for loop 
// while loop
// map loop
// foreach loop

var x = ['vasanth', 4, 'sony', true, 'sdfasdf', 'sampatha']

// console.log(x[0])
// console.log(x[1])
// console.log(x[2])

// console.log(x.length)


// console.log(3<x.length)


for (let i = 0; i < x.length; i++) {
    // console.log(x[i])
}

var y = ['vasanth', 4, 'sony', '45', 'abc']


function arrayReverse(arrayTobeReversed) {
    let z = []
    for (let i = arrayTobeReversed.length - 1; i >= 0; i--) {
        // console.log(y[i])
        z.push(arrayTobeReversed[i]) // z.push('abc') // z.push('45')
    }
    return z
}

let abc = arrayReverse(y)

let m = [4,2,1,3]

m.map(function(myval){
    // console.log(myval)
})

let n = arrayReverse(m)

// console.log('finished n :', m.reverse())

 // methods of array
// reverse(), sort(1), push(value), indexOf(value), pop()

// let a = 100;

// while (a>=0) {
//     console.log(a)
//     // a--
// }


// var xy = [{x:1},{x:2},{x:3},{y:6}]

// for (let i = 0; i < xy.length; i++) {
//     let element = xy[i];
//     console.log(element.x)
// }

// var xy = [[1,2],[3,4],[5,6],[1,2,3,4,5]]

// for (let i = 0; i < xy.length; i++) {
//     console.log(xy[i])
//     for(let j=0; j<xy[i].length; j++){
//         console.log(xy[i][j])
//     }
//     console.log('finished child array')
// }

// loop inside loop converted to function
// var xy = [[1,2],[3,4],[5,6],[1,2,3,4,5]]

// for (let i = 0; i < xy.length; i++) {
//     console.log(xy[i])
//     insideLoop(xy[i])
//     console.log('finished child array')
// }

// function insideLoop(chArray){
//     for(let j=0; j<chArray.length; j++){
//         console.log(chArray[j])
//     }
// }

