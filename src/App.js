import React from 'react'
import './style.css'
const Component1 = React.memo(function Component1(props) {
  console.log("Component 1 rendered")
  return (
    <div>
      <p>Component 1</p>
      </div>
  )
});

const Component2 = () => {
  console.log("Component 2 rendered")
  return (
    <div>
      <p>Component 2</p>
      </div>
  )
}

const App = () => {
  const [counter, setCounter] = React.useState(0)
  return (
    <div>
      <div>Count: {counter}</div>
      <Component1 />
      <Component2 />
      <button onClick={() => setCounter(counter + 1)}>increase count</button>
  </div>
  )
}
export default App