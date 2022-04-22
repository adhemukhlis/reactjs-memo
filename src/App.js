import React from 'react';
import './style.css';
const Component1 = React.memo((props) => {
  console.log('Component 1 rendered');
  return (
    <div>
      <p>Component 1 count: {props.count}</p>
    </div>
  );
});

const Component2 = () => {
  console.log('Component 2 rendered');
  return (
    <div>
      <p>Component 2</p>
    </div>
  );
};

const App = () => {
  const [counter, setCounter] = React.useState(0);
  const [counter2, setCounter2] = React.useState(0);
  return (
    <div>
      <div>Count: {counter}</div>
      <div>Count 2: {counter2}</div>
      <Component1 count={counter} />
      <Component2 />
      <button onClick={() => setCounter(counter + 1)}>increase count</button>
      <button onClick={() => setCounter2(counter + 1)}>increase count 2</button>
    </div>
  );
};
export default App;
