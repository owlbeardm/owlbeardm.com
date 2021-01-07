"use strict";

import './main.css';

function MainController($log) {
  $log.debug('MainController create');
  const ctrl = this;

  ctrl.$onInit = function() {
  }

}

const MainComponent = {
  template: require('./main.html'),
  controller: [
    '$log', MainController
  ],
  bindings: {}
}

export default MainComponent;
