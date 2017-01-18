import React from "react";

export default class MyComponent extends React.Component {
  render() {
    const DIVSTYLE = {
        color: 'red'
    };
    return (
      <div style={DIVSTYLE}>
        <h1>I AM A REACT APP!</h1>
      </div>
    );
  }
}
