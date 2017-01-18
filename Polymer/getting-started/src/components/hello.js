'use-strict';

class Hello extends HTMLElement {

  constructor() {
    //Need to call super
    super();
  }

  createdCallback(){

      // Attach a shadow root to this element
    //   let shadowRoot  = this.createShadowRoot();
     //
    //   shadowRoot.innerHTML =
    //   `
    //     <h1>Hello ${this.name}</h1>
    //     <b>I'm in shadow dom!</b>
    //     <input type="text" id="myinput"></input>
    //     <h3></h3>
    //   `;
     //
    //  let myinput = shadowRoot.querySelector('#myinput')
     //
    //  myinput.addEventListener("input", ( )=>{
    //      this.myinput = myinput.value;
    //      console.log("HERE:", this._myinput)
    //  });
     //
    //  this.name = "HEYO!"

    this.innerHTML = `<h1>HelloWorld!</h1>`;

  }

  static get observedAttributes() {
      return ["name", "myinput"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
      console.log("Attribute:", name, "oldValue:", oldValue, "newValue:", newValue);
  }

  get name() {
    return this.getAttribute("name");
  }

  set name( name ) {
    this.setAttribute("name", name );
  }

  // get myinput() {
  //   return this.getAttribute("name");
  // }
  //
  // set myinput( myinput ) {
  //   this.setAttribute("myinput", myinput );
  // }

  get myinput() {
    return this._myinput;
  }

  set myinput( myinput ) {
    this._myinput = myinput;
  }

}

//customElements.define("hello-element", Hello);
document.registerElement("hello-element", Hello);
