import React from "react";
import ReactDOM from "react-dom";

function MyInfo() {
  return (
  <div>
    <h1>Marco Ribeiro</h1>
    <p>I'm 33 years old and I live in Coimbra</p>
    <ul>
      <li>USA</li>
      <li>Italy</li>
      <li>Greec</li>
    </ul>
  </div>)
}

ReactDOM.render(<MyInfo/>, document.getElementById('root'))
