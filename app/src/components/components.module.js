"use strict";

const appComponents = angular.module('app.components', []);

import PageHeaderComponent from './pageheader.component.js';

appComponents.component('pageheader', PageHeaderComponent);

import PageFooterComponent from './page-footer/page-footer.component.js';

appComponents.component('pageFooter', PageFooterComponent);
