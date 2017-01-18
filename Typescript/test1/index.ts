//import five = require('johnny-five');
import { Sensor } from 'johnny-five';

interface Person {
  name: string;
  age: number;
}

class Greeter {
  name: string;
  constructor( name: string ){
    this.name = name;
  }
  sayHello(){
    console.log("Hello", this.name);
  }
}

function sortByName( a: Person[] ){
  let result = a.slice(0);
  result.sort( ( x, y ) => {
    return x.name.localeCompare( y.name );
  });
  return result
}

sortByName([]);
