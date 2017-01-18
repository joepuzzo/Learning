"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PolymerWebpackApp = function () {
  function PolymerWebpackApp() {
    _classCallCheck(this, PolymerWebpackApp);
  }

  _createClass(PolymerWebpackApp, [{
    key: "beforeRegister",
    value: function beforeRegister() {
      this.is = "polymer-webpack-app";
      this.properties = {
        prop1: {
          type: String,
          value: 'polymer-webpack-app'
        }
      };
    }
  }]);

  return PolymerWebpackApp;
}();

Polymer(PolymerWebpackApp);
