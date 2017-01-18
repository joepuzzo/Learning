import angular from 'angular';
import randomNames from './hello.service';
import greeting from './hello.directive';
import HelloController from './hello.controller';

export default angular.module('app.hello',[])
  .directive('greeting', greeting)
  .service('randomNames', randomNames)
  .controller('HelloController', HelloController)
  .name; //external modules always return their name
