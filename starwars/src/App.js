import React, { useEffect, useState } from "react";
import axios from "axios";
import Name from "./components/Name"
import BirthYear from "./components/BirthYear"
import Species from "./components/Species"
import Character from "./components/Character"
import 'semantic-ui-css/semantic.min.css'
import { Card } from 'semantic-ui-react'

import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [info, setInfo] = useState([]);
  const [name, setName] = useState('')
  const [birthYear, setBirthYear] = useState('')
  

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(response => {
        const starwar = response.data.results;
        
        console.log("starwar:", starwar);
      
        setInfo(starwar);
        setName(response.data.results[0].name)
        setBirthYear(response.data.results[0].birth_year)
        
      });
  }, []);


  return (
    <div className="App">
      <h1 className="Header">Starwar Character</h1>
      <Card.Group>
      {
        info.map((item) => {
          return (
            <Card>
              <Card.Content>
              <Card.Header>
                <Name name={item.name} />
              </Card.Header>
              <Card.Meta>
                <BirthYear birthYear={item.birth_year}/>
              </Card.Meta>
              </Card.Content>
            
            </Card>
          )
        })
      } 
    </Card.Group>
    </div>
  );
}

export default App;
