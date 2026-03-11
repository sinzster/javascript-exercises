const findTheOldest = function (people) {
  let maxOldest = people.reduce(
    (oldest, person) => {
      return getAge(person) >= getAge(oldest) ? person : oldest;
    },
    { yearOfDeath: 0, yearOfBirth: 0 },
  );
  return maxOldest;
};
function getAge(person) {
  if (person.yearOfDeath === undefined) {
    person.yearOfDeath = new Date().getFullYear();
  }
  return person.yearOfDeath - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
