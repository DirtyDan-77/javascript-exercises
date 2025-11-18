const sumAll = function(beg, end) {
    // Validate inputs
    if (
        typeof beg !== "number" || 
        typeof end !== "number" || 
        !Number.isInteger(beg) || 
        !Number.isInteger(end) ||
        beg < 0 || 
        end < 0
    ) {
        return "ERROR";
    }

    // Ensure beg is smaller than end
    if (beg > end) {
        [beg, end] = [end, beg];
    }

    // Build the full range and sum it
    let sum = 0;
    for (let i = beg; i <= end; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;