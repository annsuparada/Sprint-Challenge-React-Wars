import React, { useEffect, useState } from "react";
import axios from "axios";
import Name from "./components/Name"

import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [info, setInfo] = useState([]);
  const [name, setName] = useState('')
  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/?search=r2`)
      .then(response => {
        const starwar = response.data;

        console.log("starwar:", starwar);
      
        setInfo(starwar);
        setName(response.data.results[0].name)
      });
  }, []);


  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Name name={name} />
    </div>
  );
}

export default App;
