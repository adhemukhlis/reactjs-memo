import React, { Component } from "react";
import { NormalButtons } from "./normal-buttons-stateful";
import { MemoButtons } from "./memo-buttons-stateful";
import { NormalFruit } from "./normal-fruit";
import { MemoFruit } from "./memo-fruit";
import { MemoDescription } from "./memo-description";
import { NormalDescription } from "./normal-description";
class App extends Component {
  constructor(props) {
    super(props);
    console.log(`## App`);
  }
  state = {
    fruits: [],
    descs: []
  };
  setFruitValue = async value => {
    const fruits_lib = ["red apple", "water melon", "black berry"];
    for (var i = 0; i < value; i++) {
      console.log(`## index: ${i} - ${fruits_lib[i % 3]}`);
      await this.setState(prev => ({
        fruits: prev.fruits.concat([fruits_lib[i % 3]])
      }));
    }
    console.log("DONE!");
  };
  setDescValue = async value => {
    const desc_lib = [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "It is a long established fact that a reader will be distracted by the readable.",
      "The generated Lorem Ipsum is therefore always free from repetition, and injected."
    ];
    for (var i = 0; i < value; i++) {
      console.log(`## index: ${i} - ${desc_lib[i % 3]}`);
      await this.setState(prev => ({
        descs: prev.descs.concat([desc_lib[i % 3]])
      }));
    }
    console.log("DONE!");
  };
  clearValue = () => {
    this.setState({ fruits: [], descs: [] });
  };
  render() {
    const { fruits, descs } = this.state;
    return (
      <div>
        <button onClick={this.clearValue}>Clear</button>
        <br />
        <Row>
          <Col>
            Normal Fruit Button:
            <NormalButtons
              name="Normal Fruit Button"
              from="App"
              setValue={this.setFruitValue}
            />
            Memo Fruit Button:
            <MemoButtons
              name="Memo Fruit Button"
              from="App"
              setValue={this.setFruitValue}
            />
          </Col>
          <Col>
            Normal Desc Button:
            <NormalButtons
              name="Normal Desc Button"
              from="App"
              setValue={this.setDescValue}
            />
            Memo Desc Button:
            <MemoButtons
              name="Memo Desc Button"
              from="App"
              setValue={this.setDescValue}
            />
          </Col>
        </Row>
        <Row>
          <Col style={{ color: "#fff", backgroundColor: "#f0f" }}>
            <h3>NormalFruit</h3>
            {fruits.map((fruit, i) => (
              <div>
                <NormalFruit
                  from="App"
                  key={`normal-fruit-${i}`}
                  fruit_name={fruit}
                />
              </div>
            ))}
          </Col>
          <Col style={{ color: "#fff", backgroundColor: "#00f" }}>
            <h3>MemoFruit</h3>
            {fruits.map((fruit, i) => (
              <div>
                <MemoFruit
                  from="App"
                  key={`memo-fruit-${i}`}
                  fruit_name={fruit}
                />
              </div>
            ))}
          </Col>
          <Col style={{ color: "#fff", backgroundColor: "#f0f" }}>
            <h3>NormalDescription</h3>
            {descs.map((desc, i) => (
              <div>
                <NormalDescription
                  from="App"
                  key={`normal-desc-${i}`}
                  description={desc}
                />
              </div>
            ))}
          </Col>
          <Col style={{ color: "#fff", backgroundColor: "#00f" }}>
            <h3>MemoDescription</h3>
            {descs.map((desc, i) => (
              <div>
                <MemoDescription
                  from="App"
                  key={`memo-desc-${i}`}
                  description={desc}
                />
              </div>
            ))}
          </Col>
        </Row>
      </div>
    );
  }
}
const Row = ({ children }) => (
  <div style={{ width: "100%", marginTop: "24px", display: "flex" }}>
    {children}
  </div>
);
const Col = ({ children, style }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      flex: 1,
      alignItems: "center",
      ...style
    }}
  >
    {children}
  </div>
);
export default App;
