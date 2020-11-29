import React from 'react';
import './App.css';
import FirstComponent from './Components/Part1/FirstComponent';
import SecondComponent from './Components/Part1/SecondComponent';
import Namedcomponent from './Components/Part1/NamedComponent';
import Tweet from './Components/Part2/Tweet';

function App() {
  return (
    <div className="App">
      <FirstComponent />
      <SecondComponent />
      <Namedcomponent name="Amaka"  />

      <Tweet username="yourTechChic" name="Eziamaka Nwakile" date="25/08/2020" message="I'm glad I joined Ekobits x Tunga Bootcamp" />
     
      <Tweet username="techGirlAmaka" name="Chiamaka Umeh" date="30/10/2020" message="I'm excited to meet new developers" />
      <Tweet username="kenneyJimmy" name="Kenneth Jimmy Idowu" date="10/10/2020" message="I'm a devOps advocate" /> 

    </div>
  );
}

export default App;
