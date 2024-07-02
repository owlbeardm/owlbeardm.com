#!/usr/bin/node

const fs = require("fs");
const crits = require('./pathfinder2ecritical.json');
const resultPath = "./crits.md";

async function parseCrits() {
  fs.writeFileSync(resultPath, "# Crits\n\n", "utf8");
  const weaponsKeys = Object.keys(crits).filter((key) => crits[key]["Head"] && key!="Bleed");
  const sourceKeys = ["Head", "Body", "Arms", "Legs"];
  sourceKeys.forEach((skey) => {    
    fs.appendFileSync(resultPath, `## ${skey}\n\n`, "utf8");
    fs.appendFileSync(resultPath, `| ${weaponsKeys.join(` | `)} |\n`, "utf8");
    fs.appendFileSync(resultPath, `| ${weaponsKeys.map(()=>"---").join(" | ")} |\n`, "utf8");
    for(let i=0; i<15;i++){
      const ind = i+1;
      fs.appendFileSync(resultPath, `| **${ind}**: ${weaponsKeys.map((wk)=>crits[wk][skey][i]).join(` | **${ind}**: `)} |\n`, "utf8");
    };
    fs.appendFileSync(resultPath, `\n`, "utf8");
  });
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
