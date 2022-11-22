/* const scenario = {
  murderer: "Miss Scarlet",
  room: "Library",
  weapon: "Rope",
};

const declareMurderer = function () {
  return `The murderer is ${scenario.murderer}.`;
};

const verdict = declareMurderer();
console.log(verdict); */

// Miss Scarlet as scenario declared as const in global scope

/* const murderer = "Professor Plum";

const changeMurderer = function () {
  murderer = "Mrs. Peacock";
};

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
};

changeMurderer();
const verdict = declareMurderer();
console.log(verdict); */

// error as attempting to change const murderer in same scope

/* let murderer = "Professor Plum";

const declareMurderer = function () {
  let murderer = "Mrs. Peacock";
  return `The murderer is ${murderer}.`;
};

const firstVerdict = declareMurderer();
console.log("First Verdict: ", firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log("Second Verdict: ", secondVerdict); */

// Peacock then Plum. murderer in different scopes in each

/* let suspectOne = "Miss Scarlet";
let suspectTwo = "Professor Plum";
let suspectThree = "Mrs. Peacock";

const declareAllSuspects = function () {
  let suspectThree = "Colonel Mustard";
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
};

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`); */
// Scarlet, Plum, Mustard then Peacock diffrent scopes for sus. 3

/* const scenario = {
    murderer: "Miss Scarlet",
    room: "Kitchen",
    weapon: "Candle Stick",
  };
  
  const changeWeapon = function (newWeapon) {
    scenario.weapon = newWeapon;
  };
  
  const declareWeapon = function () {
    return `The weapon is the ${scenario.weapon}.`;
  };
  
  changeWeapon("Revolver");
  const verdict = declareWeapon();
  console.log(verdict); */
//   Revolver

/* let murderer = "Colonel Mustard";

const changeMurderer = function () {
  murderer = "Mr. Green";

  const plotTwist = function () {
    murderer = "Mrs. White";
  };

  plotTwist();
};

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
};

changeMurderer();
const verdict = declareMurderer();
console.log(verdict); */
// White - reassigned twice within nested functions

/* let murderer = "Professor Plum";

const changeMurderer = function () {
  murderer = "Mr. Green";

  const plotTwist = function () {
    let murderer = "Colonel Mustard";

    const unexpectedOutcome = function () {
      murderer = "Miss Scarlet";
    };

    unexpectedOutcome();
  };

  plotTwist();
};

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
};

changeMurderer();
const verdict = declareMurderer();
console.log(verdict); */
// Green as Mustard is assigned within scope but as new instance

/* const scenario = {
    murderer: "Mrs. Peacock",
    room: "Conservatory",
    weapon: "Lead Pipe",
  };
  
  const changeScenario = function () {
    scenario.murderer = "Mrs. Peacock";
    scenario.room = "Dining Room";
  
    const plotTwist = function (room) {
      if (scenario.room === room) {
        scenario.murderer = "Colonel Mustard";
      }
  
      const unexpectedOutcome = function (murderer) {
        if (scenario.murderer === murderer) {
          scenario.weapon = "Candle Stick";
        }
      };
  
      unexpectedOutcome("Colonel Mustard");
    };
  
    plotTwist("Dining Room");
  };
  
  const declareWeapon = function () {
    return `The weapon is ${scenario.weapon}.`;
  };
  
  changeScenario();
  const verdict = declareWeapon();
  console.log(verdict); */
//   Candle Stick

let murderer = "Professor Plum";

if (murderer === "Professor Plum") {
  let murderer = "Mrs. Peacock";
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
};

const verdict = declareMurderer();
console.log(verdict);

// Plum as murderer redeclared at point of Mrs Peacock
