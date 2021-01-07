"use strict";

import './wfrpcritical.css';

function WfrpcriticalController($log) {
  $log.debug('WfrpcriticalController create');
  const ctrl = this;

  ctrl.$onInit = function() {
    $log.debug('WfrpcriticalController init ');
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
