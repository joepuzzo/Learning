export default function greeting() {
  return {
    restrict: 'E',
    template: require('./hello.html'),
    scope: {
      name: '='
    },
    controller: 'HelloController',
    controllerAs: 'hello',
  }
}
