import React from 'react';
import './style.css';
const ComponentA = React.memo((props) => {
  console.log('Component A rendered');
  return (
    <div>
      <p>Component A count: {props.count}</p>
    </div>
  );
});

const ComponentB = (props) => {
  console.log('Component B rendered');
  return (
    <div>
      <p>Component B count: {props.count}</p>
    </div>
  );
};

const App = () => {
  const [counterA, setCounterA] = React.useState(0);
  const [counterB, setCounterB] = React.useState(0);
  return (
    <div>
      <div>Count A: {counterA}</div>
      <div>Count B: {counterB}</div>
      {/* saat increase count B, memo akan tetap re-render karena komponen mount ulang */}
      {/* {
        counterB % 2 === 0 && <ComponentA count={counterA} />
      } */}

      {/* gunakan style display:none pada parent untuk hide komponen memo */}
      <div style={{ display: counterB % 2 === 1 ? 'none' : '' }}>
        <ComponentA count={counterA} />
      </div>

      <ComponentB count={counterB} />
      <button onClick={() => setCounterA((prev) => (prev += 1))}>
        increase count A
      </button>
      <button onClick={() => setCounterB((prev) => (prev += 1))}>
        increase count B
      </button>
    </div>
  );
};
export default App;
