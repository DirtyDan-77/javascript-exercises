const fibonacci = function(numGiven) {
    let num = Number(numGiven);
    
    if(num < 0) {
        return "OOPS";
    }
    
    if(num == 0) {
        return 0;
    }

    if(num == 1 || num == 2) {
        return 1;
    }

//returns the 6th member of the series: 8  (1, 1, 2, 3, 5, 8)
    let fibArr = [1, 1];    
    let finalFib = [];
    for(let i = 2; i < num; i++) {
        let curr = fibArr[fibArr.length-1] + fibArr[fibArr.length-2]
        fibArr.push(curr);
        finalFib = fibArr;
    }

    return finalFib[finalFib.length-1];
};

// Do not edit below this line
module.exports = fibonacci;
