const citizens = [
  {
    name: "Kane",
    location: "Office",
    equipment: ["Wheelchair"],
    age: 85,
    protectiveGear: false,
  },
  {
    name: "GC",
    location: "Phone booth",
    equipment: ["Mamona"],
    age: 50,
    protectiveGear: false,
  },
  {
    name: "Pszymuś",
    location: "Home",
    equipment: ["Dobry humor"],
    age: 18,
    protectiveGear: false,
  },
];

function partial(f, args) {
  return (x) => f(...args, x);
}

// curry = ((x, y) => z) => (x) => (y) => z
function curry(f) {
  return (x) => (y) => f(x, y);
}

const ifElse = (predicate, ifTrue, ifFalse) => (x) =>
  predicate(x) ? ifTrue(x) : ifFalse(x);

const map2 = (f, items) => {
  const result = [];
  for (let i = 0; i < items.length; i++) {
    result.push(f(items[i]));
  }
  return result;
};

const map = curry(map2);

// g(f(x)) = g * f
function compose(g, f) {
  return (x) => g(f(x));
}

function pipe(f, g) {
  return (x) => g(f(x));
}

function giveSrajtaśma(citizen) {
  return {
    ...citizen,
    equipment: [...citizen.equipment, "Srajtaśma"],
  };
}

function wearProtectiveGear(citizen) {
  return { ...citizen, protectiveGear: true };
}

const moveTo = (location) => (citizen) => ({ ...citizen, location });
const isOlderThen = (age) => (citizen) => citizen.age > age;

const moveToShelter = moveTo("Shelter");
const moveToHospital = moveTo("Hospital");

const moveToAppropriateLocation = ifElse(
  isOlderThen(45),
  moveToHospital,
  moveToShelter
);

const manageCitizenOnNuclearWarStarted = compose(
  moveToAppropriateLocation,
  giveSrajtaśma,
  wearProtectiveGear
);

const onStartNuclearWar = map(manageCitizenOnNuclearWarStarted);

const newCitizens = onStartNuclearWar(citizens);

console.log(newCitizens, citizens);
