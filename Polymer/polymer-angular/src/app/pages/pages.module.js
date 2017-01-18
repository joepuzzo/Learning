import angular from 'angular';
import uirouter from 'angular-ui-router'; //uirouter is literally just a string

import pagesRouter from './pages.routes';
import BarStateController from './bar.state.controller';

export default angular.module('application.pages', [uirouter]) //Technically no need to import uirouter but if we want to use in other app we can!
  .config( pagesRouter )
  .controller('BarStateController', BarStateController)
  .name; //external modules always return their name
