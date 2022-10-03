#!/usr/bin/node

const fs = require("fs");
const crits = require('./pathfinder2ecritical.json');
const resultPath = "./crits.md";

async function parseCrits() {
  fs.writeFileSync(resultPath, "# Crits\n\n", "utf8");
  const weaponsKeys = Object.keys(crits).filter((key) => crits[key]["Head"]);
  const sourceKeys = ["Head", "Body", "Arms", "Legs"];
  sourceKeys.forEach((skey) => {
    fs.appendFileSync(resultPath, `## ${skey}\n\n`, "utf8");
    fs.appendFileSync(resultPath, `| ${weaponsKeys.join(" | ")} |\n`, "utf8");
    fs.appendFileSync(resultPath, `| ${weaponsKeys.map(()=>"---").join(" | ")} |\n`, "utf8");
    for(let i=0; i<15;i++){
      fs.appendFileSync(resultPath, `| ${weaponsKeys.map((wk)=>crits[wk][skey][i]).join(" | ")} |\n`, "utf8");
    };
    fs.appendFileSync(resultPath, `\n`, "utf8");
  });
}
parseCrits();

//   async function loadSpells() {
//   try {
//     fs.writeFileSync("parcer/res/spell_htmls.json", "[", "utf8");
//     for (let i = 1; i < 870; i++) {
//       const spelllink = `https://2e.aonprd.com/Spells.aspx?ID=${i}`;
//       try {
//         const spell = await getSpellHtml(spelllink);
//         logSuccess(i, "ok", spelllink);
//         if (i !== 1) {
//           fs.appendFileSync("parcer/res/spell_htmls.json", ",", "utf8");
//         }
//         fs.appendFileSync(
//           "parcer/res/spell_htmls.json",
//           JSON.stringify(spell, null, 4),
//           "utf8"
//         );
//       } catch (e) {
//         logError(i, "Cant parse spell", spelllink);
//         logError("\t", e);
//       }
//     }
//     fs.appendFileSync("parcer/res/spell_htmls.json", "]", "utf8");
//     logSuccess("Finished\n\n");
//   } catch (e) {
//     logError(e);
//   }
// }
// loadSpells();

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
