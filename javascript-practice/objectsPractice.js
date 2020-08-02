var x = {
    x: 1,
    y: "2",
    z: true,
    k: [1,2,3],
    j: function (aditya,b) { // function signature
        // console.log(aditya+b) // function body
        var addedValue = aditya+b
        return  addedValue;
    }
}

var sony = x.j(3,4)

// console.log(sony)


function formula(b,c) {
    return b/c
}

console.log( formula('aditya','vardhan'))