"use strict";

import "./pathfinder2ecritical.css";
const criticals = require("./pathfinder2ecritical.json");

function Pathfinder2eCriticalController($log) {
  $log.debug("Pathfinder2eCriticalController create");
  const ctrl = this;
  ctrl.toWound = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12],
    [1, 3, 4, 5, 6, 7, 9, 10, 12, 14, 14],
    [1, 3, 5, 6, 7, 8, 10, 11, 13, 14, 15],
    [1, 4, 6, 7, 8, 9, 11, 12, 13, 15, 15],
    [2, 5, 7, 8, 9, 10, 11, 12, 14, 15, 15],
    [2, 5, 7, 8, 9, 10, 12, 13, 14, 15, 15],
    [3, 6, 8, 9, 10, 11, 13, 13, 15, 15, 15],
    [4, 7, 9, 10, 11, 12, 13, 14, 15, 15, 15],
    [5, 8, 10, 11, 12, 13, 13, 14, 15, 15, 15],
    [5, 8, 10, 11, 12, 13, 14, 15, 15, 15, 15],
    [6, 9, 11, 12, 13, 13, 14, 15, 15, 15, 15],
    [7, 10, 12, 13, 13, 14, 14, 15, 15, 15, 15],
    [7, 10, 12, 13, 13, 14, 15, 15, 15, 15, 15],
    [8, 11, 13, 13, 14, 14, 15, 15, 15, 15, 15],
    [9, 12, 13, 14, 14, 15, 15, 15, 15, 15, 15],
    [10, 12, 13, 14, 15, 15, 15, 15, 15, 15, 15],
    [11, 13, 14, 15, 15, 15, 15, 15, 15, 15, 15],
    [11, 13, 14, 15, 15, 15, 15, 15, 15, 15, 15],
    [12, 14, 15, 15, 15, 15, 15, 15, 15, 15, 15],
    [13, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
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
    ctrl.makeWPlace(ctrl.toWoundPlace[20-ctrl.wBodyPart]);
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
}

const Pathfinder2eCriticalComponent = {
  template: require("./pathfinder2ecritical.html"),
  controller: ["$log", Pathfinder2eCriticalController],
  bindings: {},
};

export default Pathfinder2eCriticalComponent;
