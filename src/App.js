
import styles from "./App.css";
import FlatButton from "./components/FlatButton/flatbutton.js";
import RoundButton from "./components/RoundButton/roundbutton.js";

import Background from "./components/Background/background.js";
import {backgrounds} from "./data/backgrounds.js";

import Neck from "./components/Neck/neck.js";
import {neck} from "./data/neck.js"

import Ears from "./components/Ears/ears.js";
import {ears} from "./data/ears.js"

import Eyes from "./components/Eyes/eyes.js";
import {eyes} from "./data/eyes.js";

import Hair from "./components/Hair/hair.js";
import {hair} from "./data/hair.js";

import Leg from "./components/Leg/leg.js"
import {leg} from "./data/leg.js"

import Accessories from "./components/Accessories/accessories.js";
import {accessories} from "./data/accessories.js";

import Nose from "./components/Nose/nose.js";
import {nose} from "./data/nose.js";

import Mouth from "./components/Mouth/mouth.js";
import {mouth} from "./data/mouth.js"

import { useState } from "react";
import mergeImages from "merge-images";
import { saveAs } from "file-saver";


const App = () => {

  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [accessoryIndex, setAccessoryIndex] = useState(0)
  const [earsIndex, setEarsIndex] = useState(0)
  const [hairIndex, setHairIndex] = useState(0)
  const [eyesIndex, setEyesIndex] = useState(0)
  const [mouthIndex, setMouthIndex] = useState(0)
  const [legIndex, setLegIndex] = useState(0)
  const [neckIndex,setNeckIndex] = useState(0)
  const [selectedAccessory, setSelectedAccessory] = useState(null)
  const [selectedStyle, setSelectedStyle] = useState(null)

  
  const randomize = () => {
    setBackgroundIndex(Math.floor(Math.random() * backgrounds.length));
    setAccessoryIndex(Math.floor(Math.random() * accessories.length));
    setEarsIndex(Math.floor(Math.random() * ears.lenght));
    setHairIndex(Math.floor(Math.random() * hair.length));
    setEyesIndex(Math.floor(Math.random() * eyes.length));
    setMouthIndex(Math.floor(Math.random() * mouth.length));
    setLegIndex(Math.floor(Math.random() * leg.length));
    setNeckIndex(Math.floor(Math.random() * neck.length));
   
  };


  const selectAccessoriesButton = (e) => {
    const selection = e.target.innerText;
    setSelectedAccessory(selection);
  }

}




// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
