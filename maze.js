function mazeGennerator(n) {
    
    let positive = Math.sign(n)
    // check whether the input value if it Positive Integer or not
    if (positive === 1 && isNaN(n) === false && n>1 === true) {
        
        // input the value to the expected amount based on the rule 4n -1
        let S = (4*n) - 1
       
        // using nested loop to create 2D console data
        for (let i = 0; i < S ; i++) {
            
            // declare variable to store the result pattern each loop i(n)
            let pattern = ''
            for (let j = 0; j < S; j++) {
                // condittion for specific the patternt
                if (j === 0 || j === S - 1 || i % 2 === 0) {
                    if (i % 4 === 0 && j === 1) pattern += ' ' // for the left door
                    else if (i % 2 === 0 && i % 4 !== 0 && j === S - 2) pattern += ' ' // for the right door
                    else pattern += '@' // for the wall
                } else {
                    // create the hollow partern/way
                    pattern += ' ' 
                }
            }
            // to print the pattern on the console
            console.log(pattern)
        }
    } else {
        console.log('Please Input Positive Interger That Higher than "1"')
    }
}

mazeGennerator('h')
mazeGennerator(1)
mazeGennerator(2)
mazeGennerator(10)