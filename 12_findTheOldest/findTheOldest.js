const findTheOldest = function(people) {
    const today = new Date();
    const year = today.getFullYear();
    return people.reduce((oldest, current) => {
        const oldestAge = (oldest.yearOfDeath || year) - oldest.yearOfBirth;
        const currentAge = (current.yearOfDeath || year) - current.yearOfBirth;

        if(oldestAge >= currentAge){
            return oldest;
        } else {
            return current;
        }
    });
};

// Do not edit below this line
module.exports = findTheOldest;
