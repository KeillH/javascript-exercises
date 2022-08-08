const findTheOldest = function(people) {
    //Accepts array of objects
    const orderedPeople = people.sort((a,b) => {
        let ageA;
        let ageB;
        currentYear = new Date().getFullYear();
        if ('yearOfDeath' in a){
            ageA = a.yearOfDeath -a.yearOfBirth;
        }else {
            ageA = currentYear-a.yearOfBirth;
        }

        if ('yearOfDeath' in b){
            ageB = b.yearOfDeath -b.yearOfBirth;
        }else {
            ageB = currentYear-b.yearOfBirth;
        }
        return ageA > ageB ? -1: 1;

    });


    return people[0];

};

// Do not edit below this line
module.exports = findTheOldest;
