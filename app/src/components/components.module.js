"use strict";

const appComponents = angular.module('app.components', []);

import PageHeaderComponent from './pageheader.component.js';

appComponents.component('pageheader', PageHeaderComponent);

import PageFooterComponent from './page-footer/page-footer.component.js';

appComponents.component('pageFooter', PageFooterComponent);

import MainComponent from './main/main.component.js';

appComponents.component('main', MainComponent);

import WfrpcriticalComponent from './wfrpcritical/wfrpcritical.component.js';

appComponents.component('wfrpcritical', WfrpcriticalComponent);

import Pathfinder2eCriticalComponent from './pathfinder2ecritical/pathfinder2ecritical.component.js';

appComponents.component('pathfinder2ecritical', Pathfinder2eCriticalComponent);

import WWNCriticalComponent from './wwncritical/wwncritical.component.js';

appComponents.component('wwncritical', WWNCriticalComponent);
