const getTheTitles = function(books) {
    let titles = [];
for (const item of books) {
        titles.push(item.title)
    }

return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
