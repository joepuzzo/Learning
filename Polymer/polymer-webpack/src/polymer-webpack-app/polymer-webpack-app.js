class PolymerWebpackApp{
  beforeRegister(){
    this.is = "polymer-webpack-app";
    this.properties = {
      prop1: {
        type: String,
        value: 'polymer-webpack-app',
      }
    };
  }
}
Polymer(PolymerWebpackApp);
