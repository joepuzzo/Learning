export default class HelloController {
  constructor( randomNames, $scope ) {
    this.name = 'World';
    this.random = randomNames;
  }

  changeName() {
    this.name = 'Bobby';
  }

  randomName(){
    this.name = this.random.getName();
  }
}

HelloController.$inject = ['randomNames', '$scope'];
