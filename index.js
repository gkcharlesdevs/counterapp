import React from "react";
import ReactDOM from "react-dom";

let count = 0;

function increment() {
  count = count + 1;
  ReactDOM.render(<App count={count} />, document.getElementById("root"));
}

function decrement() {
  if (count - 1 >= 0) {
      count = count - 1;
  }

  ReactDOM.render(<App count={count} />, document.getElementById("root"));
}

function reset() {

    count = 0;

  ReactDOM.render(<App count={count} />, document.getElementById("root"));
}

function App(props) {
  return (
    <>
      <h1 className="display">{props.count}</h1>
      <button onClick={increment} className="btn">increment</button>
      <br />
      <br />
      <button onClick={decrement} className="btn">decrement</button>
      <br />
      <br />
      <button onClick={reset} className="btn">reset</button>
    </>
  );
}

ReactDOM.render(<App count={0} />, document.getElementById("root"));
