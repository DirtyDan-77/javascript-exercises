const findTheOldest = function(people) {
    const today = new Date().getFullYear();
    let ages = [];

    for (const info of people) {
        const deathYear = info.yearOfDeath ?? today;
        const age = deathYear - info.yearOfBirth;

        ages.push({ age, person: info });
    }

    ages.sort((a, b) => b.age - a.age);

    return ages[0].person;
};


// const findTheOldest = function(people) {
// let ages = [];
// const today = new Date();

// for(const info of people) {
//     if(!info.yearOfDeath) {
//         ages.push({
//             age: today - info.yearOfBirth,
//             name: info.name
//         });

//         continue;
//     }

//     ages.push({
//     age: info.yearOfDeath - info.yearOfBirth,
//     name: info.name
//     });
// }

// ages.sort((a, b) => b.age - a.age);

// return people[ages[0].name];
// };

// Do not edit below this line
module.exports = findTheOldest;
