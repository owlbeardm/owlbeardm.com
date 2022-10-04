#!/usr/bin/node

const fs = require("fs");
const crits = require('./pathfinder2ecritical.json');
const resultPath = "./crits_table.csv";
const resultPath2 = "./crits_table_names.js";

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
          fs.appendFileSync(resultPath, `<b>${ind}</b>: ${crits[wkey][skey][i]}${ind != 15 ? '|' : ''}`, "utf8");
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
