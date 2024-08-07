"use strict";

import "./wwncritical.css";
const criticals = require("./wwncritical.json");

function WWNCriticalController($log) {
  $log.debug("wwncriticalController create");
  const ctrl = this;
  ctrl.toWound = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12],
    [1, 2, 4, 5, 7, 9, 10, 11, 12, 13, 14],
    [1, 3, 5, 6, 8, 10, 11, 11, 13, 14, 15],
    [1, 3, 5, 7, 8, 10, 11, 12, 14, 15, 15],
    [2, 4, 6, 8, 9, 11, 12, 13, 14, 15, 15],
    [2, 4, 6, 9, 10, 11, 12, 13, 14, 15, 15],
    [2, 5, 7, 10, 11, 12, 13, 14, 15, 15, 15],
    [3, 5, 8, 11, 11, 12, 13, 14, 15, 15, 15],
    [3, 6, 8, 11, 12, 13, 14, 14, 15, 15, 15],
    [3, 6, 9, 12, 12, 13, 14, 15, 15, 15, 15],
    [4, 7, 9, 12, 13, 14, 14, 15, 15, 15, 15],
    [4, 7, 10, 13, 13, 14, 14, 15, 15, 15, 15],
    [4, 8, 10, 13, 14, 14, 15, 15, 15, 15, 15],
    [5, 8, 11, 14, 14, 14, 15, 15, 15, 15, 15],
    [5, 9, 11, 14, 14, 15, 15, 15, 15, 15, 15],
    [5, 9, 12, 14, 15, 15, 15, 15, 15, 15, 15],
    [6, 10, 12, 15, 15, 15, 15, 15, 15, 15, 15],
    [6, 10, 13, 15, 15, 15, 15, 15, 15, 15, 15],
    [6, 11, 14, 15, 15, 15, 15, 15, 15, 15, 15],
    [7, 12, 15, 15, 15, 15, 15, 15, 15, 15, 15],
  ];
  ctrl.toWoundPlace = [
    "Head",
    "Right Arm",
    "Right Arm",
    "Left Arm",
    "Left Arm",
    "Body",
    "Body",
    "Right Leg",
    "Left Leg",
    "Head",
    "Right Arm",
    "Right Arm",
    "Left Arm",
    "Left Arm",
    "Body",
    "Body",
    "Body",
    "Right Leg",
    "Left Leg",
    "Head",
  ];

  ctrl.criticals = criticals;

  ctrl.$onInit = function () {
    $log.debug("Pathfinder2eCriticalController init ");
  };

  ctrl.placeChanged = function () {
    console.log("changed");
  };

  ctrl.wCount = undefined;
  ctrl.wRoll = undefined;
  ctrl.wResult = undefined;
  ctrl.wBodyPart = undefined;

  ctrl.makeWBodyPart = function (r) {
    ctrl.wBodyPart = r;
    ctrl.makeWPlace(ctrl.toWoundPlace[20 - ctrl.wBodyPart]);
  };

  ctrl.makeWPlace = function (str) {
    if (str.toLowerCase().includes("head")) {
      ctrl.place = "Head";
    } else if (str.toLowerCase().includes("body")) {
      ctrl.place = "Body";
    } else if (str.toLowerCase().includes("leg")) {
      ctrl.place = "Legs";
    } else if (str.toLowerCase().includes("arm")) {
      ctrl.place = "Arms";
    } else {
      ctrl.place = undefined;
    }
  };

  ctrl.makeWCount = function (c) {
    ctrl.wCount = c;
    ctrl.makeWResult();
  };
  ctrl.makeWRoll = function (r) {
    ctrl.wRoll = r;
    ctrl.makeWResult();
  };
  ctrl.makeWResult = function () {
    if (!ctrl.wCount || !ctrl.wRoll) {
      ctrl.wResult = undefined;
    } else {
      ctrl.wResult = ctrl.toWound[20 - ctrl.wRoll][ctrl.wCount - 1];
    }
  };

  ctrl.rangom = function () {
    const rand1 = Math.random();
    const rand2 = Math.random();
    console.log("Random", rand1, rand2)
    ctrl.makeWBodyPart(Math.floor(rand1 * 20 + 1));
    ctrl.wResult = Math.floor(rand2 * 15 + 1);
  }
}

const WWNCriticalComponent = {
  template: require("./wwncritical.html"),
  controller: ["$log", WWNCriticalController],
  bindings: {},
};

export default WWNCriticalComponent;
