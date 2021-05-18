"use strict";

import './pathfinder2ecritical.css';
const criticals = require('./pathfinder2ecritical.json');

function Pathfinder2eCriticalController($log) {
  $log.debug('Pathfinder2eCriticalController create');
  const ctrl = this;

  ctrl.criticals = criticals;

  ctrl.$onInit = function () {
    $log.debug('Pathfinder2eCriticalController init ');
  }

  ctrl.placeChanged = function () {
    console.log("changed");
  }

  ctrl.wCount = 1;
  ctrl.wRoll = 1;
  ctrl.wResult = 1;
}

ctrl.wCount = function(c) {
  ctrl.wCount = c;
}
ctrl.wRoll = function(r) {
  ctrl.wRoll = r;
}
ctrl.wResult = function(r) {
  ctrl.wResult = r;
}

const Pathfinder2eCriticalComponent = {
  template: require('./pathfinder2ecritical.html'),
  controller: [
    '$log', Pathfinder2eCriticalController
  ],
  bindings: {}
}

export default Pathfinder2eCriticalComponent;
