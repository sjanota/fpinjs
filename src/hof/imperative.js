const citizens = [
  {
    name: "Kane",
    location: "Office",
    equipment: ["Wheelchair"],
    age: 85,
  },
  {
    name: "GC",
    location: "Phone booth",
    equipment: ["Mamona"],
    age: 50,
  },
  {
    name: "Pszymuś",
    location: "Home",
    equipment: ["Dobry humor"],
    age: 18,
  },
];

function partial(f, args) {
  return (x) => f(...args, x);
}

function map(citizens, f) {
  const result = [];
  for (let i = 0; i < citizens.length; i++) {
    result.push(f(citizens[i]));
  }
  return result;
}

// g(f(x)) = g * f
function compose(g, f) {
  return (x) => g(f(x));
}

function giveSrajtaśma(citizen) {
  return {
    ...citizen,
    equipment: [...citizen.equipment, "Srajtaśma"],
  };
}

function moveTo(location, citizen) {
  return { ...citizen, location };
}

const moveToShelter = partial(moveTo, ["Shelter"]);
const moveToHospital = partial(moveTo, ["Hospital"]);

function moveToAppropriateLocation(citizen) {
  if (citizen.age > 45) {
    return moveToHospital(citizen);
  } else {
    return moveToShelter(citizen);
  }
}

// [citizen] => [citizen]
function moveAllToAppropriateLocation(citizens) {
  return map(citizens, moveToAppropriateLocation);
}

// [citizen] => [citizen]
function giveAllSrajtaśma(citizens) {
  return map(citizens, giveSrajtaśma);
}

function onStartNuclearWar(citizens) {
  return compose(giveAllSrajtaśma, moveAllToAppropriateLocation)(citizens);
}

const newCitizens = onStartNuclearWar(citizens);

console.log(newCitizens, citizens);
