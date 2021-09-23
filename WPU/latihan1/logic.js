var s = ""

// piramid to bottom
// for (let i = 0; i <= 5; i++) {
//     for (let j = 0; j < i; j++) {
//         s += " "
//     }

//     for (let k = 5; k >= i; k--) {
//         s += "* "
//     }
    
//     s += "\n"
// }

for (let i = 0; i <= 5; i++) {
    for (let j = 0; j < i; j++) {
        s += " "
    }

    for (let k = 5; k >= i; k--) {
        s += "* "
    }
    
    s += "\n"
}

var style = `
color: brown
`
console.log(`%c${s}`, style);
console.error("Testing")

