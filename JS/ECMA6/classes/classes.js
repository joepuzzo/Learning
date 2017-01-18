"use strict";

/*---- Old method ----*/

function PersonOld( first, last ) { 
  this.first = first;
  this.last  = last;
  this.fullName = `${first} ${last}`;
}

PersonOld.prototype.speak = function( speach ){
 console.log( speach ); 
}

let joe = new PersonOld("Joe", "Puzzo");
joe.speak( "Hello World!" );


/*---- New method ----*/
class Person { 

  constructor( first, last ) { 
    this.first = first;
    this.last  = last;
    this.fullName = `${first} ${last}`;
  }

  speak( speach ) {
    console.log( `${speach} - ${this.fullName}` ); 
  } 

}

let anth = new Person("Anthony", "Puzzo");
anth.speak( "Hello World!" );


/*---- Inheritence ----*/
class Student extends Person {

  constructor( first, last, grade ) { 
    super( first, last );
    this.grade = grade;
  } 

  speak( speach ) {
   super.speak( speach );  
  }
}

let tina = new Student("Bettina", "Puzzo", 11);
tina.speak("Hello World!");
