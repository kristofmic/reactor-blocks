/* global document */
/* eslint import/first: 0 */

require('es6-promise').polyfill();

import ReactDOM from 'react-dom';

import router from './route/router';

if (process.env.BROWSER) {
  require('./styles/index.scss');
}

// Bind app to the DOM
ReactDOM.render(router, document.getElementById('entry'));
