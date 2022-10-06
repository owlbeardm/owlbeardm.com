#!/usr/bin/node

const fs = require("fs");
const crits = require('./pathfinder2ecritical.json');
const resultPath = "./crits_table.csv";
const resultPath2 = "./crits_table_names.js";
const conditions = [
  { name: "Clumsy", isNumeric: true, compendium: "i3OJZU2nk64Df3xm" },
  { name: "Doomed", isNumeric: true, compendium: "3uh1r86TzbQvosxv" },
  { name: "Drained", isNumeric: true, compendium: "4D2KBtexWXa6oUMR" },
  { name: "Dying", isNumeric: true, compendium: "yZRUzMqrMmfLu0V1" },
  { name: "Enfeebled", isNumeric: true, compendium: "MIRkyAjyBeXivMa7" },
  { name: "Frightened", isNumeric: true, compendium: "TBSHQspnbcqxsmjL" },
  { name: "Sickened", isNumeric: true, compendium: "fesd1n5eVhpCSS18" },
  { name: "Slowed", isNumeric: true, compendium: "xYTAsEpcJE1Ccni3" },
  { name: "Stunned", isNumeric: true, compendium: "dfCMdR4wnpbYNTix" },
  { name: "Stupefied", isNumeric: true, compendium: "e1XGnhKNSQIm5IXg" },
  { name: "Wounded", isNumeric: true, compendium: "Yl48xTdMh3aeQYL2" },
  { name: "Blinded", isNumeric: false, compendium: "XgEqL1kFApUbl5Z2" },
  { name: "Confused", isNumeric: false, compendium: "yblD8fOR1J8rDwEQ" },
  { name: "Dazzled", isNumeric: false, compendium: "TkIyaNPgTZFBCCuh" },
  { name: "Deafened", isNumeric: false, compendium: "9PR9y0bi4JPKnHPR" },
  { name: "Encumbered", isNumeric: false, compendium: "D5mg6Tc7Jzrj6ro7" },
  { name: "Fascinated", isNumeric: false, compendium: "AdPVz7rbaVSRxHFg" },
  { name: "Fatigued", isNumeric: false, compendium: "HL2l2VRSaQHu9lUw" },
  { name: "Flat-Footed", isNumeric: false, compendium: "AJh5ex99aV6VTggg" },
  { name: "Fleeing", isNumeric: false, compendium: "sDPxOjQ9kx2RZE8D" },
  { name: "Grabbed", isNumeric: false, compendium: "kWc1fhmv9LBiTuei" },
  { name: "Hidden", isNumeric: false, compendium: "iU0fEDdBp3rXpTMC" },
  { name: "Immobilized", isNumeric: false, compendium: "eIcWbB5o3pP6OIMe" },
  { name: "Invisible", isNumeric: false, compendium: "zJxUflt9np0q4yML" },
  { name: "Observed", isNumeric: false, compendium: "1wQY3JYyhMYeeV2G" },
  { name: "Paralyzed", isNumeric: false, compendium: "6uEgoh53GbXuHpTF" },
  { name: "Petrified", isNumeric: false, compendium: "dTwPJuKgBQCMxixg" },
  { name: "Prone", isNumeric: false, compendium: "j91X7x0XSomq8d60" },
  { name: "Quickened", isNumeric: false, compendium: "nlCjDvLMf2EkV2dl" },
  { name: "Restrained", isNumeric: false, compendium: "VcDeM8A5oI6VqhbM" },
  { name: "Unconscious", isNumeric: false, compendium: "fBnFDH2MTzgFijKf" }
];

replaceCondition = (line, condition) => {
  return line
    .replace(new RegExp(`(?=${condition.name}${condition.isNumeric ? ' ?[0123456789]?' : ''})`, 'gi'), `@Compendium[pf2e.conditionitems.${condition.compendium}]{`)
    .replace(new RegExp(`(?<=${condition.name}${condition.isNumeric ? ' ?[0123456789]?' : ''})`, 'gi'), "}")
    .replace(/}(?= [0123456789]})/g, "")
    .replace(/(?<=}) }/g, " ")
    .replace(new RegExp(`${condition.name}${condition.isNumeric ? '?[0123456789]?' : ''}`, 'gi'), (txt) => { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase() });
}

const filter = (line) => {
  let result = line
    .replace(/Will save/g, "@Check[type:will]")
    .replace(/Reflex save/g, "@Check[type:reflex]")
    .replace(/Fortitude save/g, "@Check[type:fortitude]")
    .replace(/Medicine check/g, "@Check[type:medicine]")
    .replace(/(?<=\dd(3|4|5|6|8|10|20))/g, "]]")
    .replace(/(?=\d\d?d\d)/g, "[[");
  for (let i = 0; i < conditions.length; i++) {
    result = replaceCondition(result, conditions[i]);
  }
  return result;
}

async function parseCrits() {
  fs.writeFileSync(resultPath, "# Crits\n\n", "utf8");
  fs.writeFileSync(resultPath2, "const damageTypes = [\n", "utf8");
  const weaponsKeys = Object.keys(crits);
  const sourceKeys = ["Head", "Body", "Arms", "Legs"];
  weaponsKeys.forEach((wkey) => {
    fs.appendFileSync(resultPath2, `    {id:\"${wkey}\",name:\"${wkey}\",hasBodyParts:${!crits[wkey]["NoBodyPart"]}},\n`, "utf8");
    if (!crits[wkey]["NoBodyPart"]) {
      sourceKeys.forEach((skey) => {
        fs.appendFileSync(resultPath, `${wkey} - ${skey}\n`, "utf8");
        for (let i = 0; i < 15; i++) {
          const ind = i + 1;
          const line = `<b>${ind}</b>: ${crits[wkey][skey][i]}${ind != 15 ? '|' : ''}`;
          fs.appendFileSync(resultPath, filter(line), "utf8");
        };
        fs.appendFileSync(resultPath, `\n`, "utf8");
      });
    }
    else {
      const skey = "Wounds";
      fs.appendFileSync(resultPath, `${wkey} - ${skey}\n`, "utf8");
      for (let i = 0; i < 15; i++) {
        const ind = i + 1;
        fs.appendFileSync(resultPath, `<b>${ind}</b>: ${crits[wkey][skey][i]}${ind != 15 ? '|' : ''}`, "utf8");
      };
      fs.appendFileSync(resultPath, `\n`, "utf8");
    }
  });
  fs.appendFileSync(resultPath2, "];", "utf8");
}
parseCrits();

function logError(...arguments) {
  if (typeof console !== "undefined") {
    arguments.unshift("\x1b[31m");
    arguments.push("\x1b[0m");
    console.log.apply(console, arguments);
  }
}

function logSuccess(...arguments) {
  if (typeof console !== "undefined") {
    arguments.unshift("\x1b[32m");
    arguments.push("\x1b[0m");
    console.log.apply(console, arguments);
  }
}
