"use strict";

function AppController($log) {
  const ctrl = this;
}

const AppComponent = {
  template: require('./app.html'),
  controller: [
    '$log',
    AppController
  ]
};

export default AppComponent;
