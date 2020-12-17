import React, { Component } from "react";
class ReusableButtonComponent extends Component {
  componentDidMount() {
    const { from, name } = this.props;
    console.log(`from ${from} -> render: ReusableButtonComponent ${name}`);
  }
  render() {
    const { setValue } = this.props;
    return (
      <div>
        <button onClick={() => setValue(4)}>+4</button>
        <button onClick={() => setValue(8)}>+8</button>
        <button onClick={() => setValue(16)}>+16</button>
        <button onClick={() => setValue(32)}>+32</button>
      </div>
    );
  }
}
export default ReusableButtonComponent;
