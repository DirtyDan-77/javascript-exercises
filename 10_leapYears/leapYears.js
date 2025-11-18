const leapYears = function(year) {
    // A year is a leap year if:
    // 1. It is divisible by 4
    // 2. But NOT divisible by 100
    // 3. Unless it IS divisible by 400

    if (year % 400 === 0) {
        return true;
    }
    if (year % 100 === 0) {
        return false;
    }
    return year % 4 === 0;
};

// Do not edit below this line
module.exports = leapYears;