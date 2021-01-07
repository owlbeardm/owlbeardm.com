"use strict";

import './wfrpcritical.css';
const criticals = require('./wfrpcritical.json');

function WfrpcriticalController($log) {
  $log.debug('WfrpcriticalController create');
  const ctrl = this;

  ctrl.criticals = criticals;

  ctrl.$onInit = function () {
    $log.debug('WfrpcriticalController init ');
  }

  ctrl.placeChanged = function () {
    console.log("changed");
  }

}

const WfrpcriticalComponent = {
  template: require('./wfrpcritical.html'),
  controller: [
    '$log', WfrpcriticalController
  ],
  bindings: {}
}

export default WfrpcriticalComponent;
