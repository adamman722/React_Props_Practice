import React from "react";
import Card from "./Card";
import Contats from "../contacts";
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card contact={Contats[0]} />
      <Card contact={Contats[1]} />
      <Card contact={Contats[2]} />
    </div>
  );
}

export default App;
