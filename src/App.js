
import styles from "./App.css";
import FlatButton from "./components/FlatButton/flatbutton.js";
import RoundButton from "./components/RoundButton/roundbutton.js";

import Background from "./components/Background/background.js";
import { backgrounds } from "./data/backgrounds.js";

import Neck from "./components/Neck/neck.js";
import { neck } from "./data/neck.js"

import Ears from "./components/Ears/ears.js";
import { ears } from "./data/ears.js"

import Eyes from "./components/Eyes/eyes.js";
import { eyes } from "./data/eyes.js";

import Hair from "./components/Hair/hair.js";
import { hair } from "./data/hair.js";

import Leg from "./components/Leg/leg.js"
import { leg } from "./data/leg.js"

import Accessories from "./components/Accessories/accessories.js";
import { accessories } from "./data/accessories.js";

import Nose from "./components/Nose/nose.js";
import { nose } from "./data/nose.js";

import Mouth from "./components/Mouth/mouth.js";
import { mouth } from "./data/mouth.js"

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
  const [neckIndex, setNeckIndex] = useState(0)
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

  // setting selected accessories.

  const selectAccessoriesButton = (e) => {
    const selection = e.target.innerText;
    setSelectedAccessory(selection);
  }

  // setting styles 

  const selectStylesButton = (name) => {
    setSelectedStyle(name)
    switch (selectedAccessory) {
      case "Background":
        switch (name) {
          case "Blue50":
            return setBackgroundIndex(0);
          case "Blue60":
            return setBackgroundIndex(1);
          case "Blue70":
            return setBackgroundIndex(2);
          case "DarkBlue30":
            return setBackgroundIndex(3);
          case "DarkBlue50":
            return setBackgroundIndex(4);
          case "DarkBlue70":
            return setBackgroundIndex(5);
          case "Green50":
            return setBackgroundIndex(6);
          case "Green60":
            return setBackgroundIndex(7);
          case "Green70":
            return setBackgroundIndex(8);
          case "Grey40":
            return setBackgroundIndex(9);
          case "Grey70":
            return setBackgroundIndex(10);
          case "Grey80":
            return setBackgroundIndex(11);
          case "Red50":
            return setBackgroundIndex(12);
          case "Red60":
            return setBackgroundIndex(13);
          case "Red70":
            return setBackgroundIndex(14);
          case "Yellow50":
            return setBackgroundIndex(15);
          case "Yellow60":
            return setBackgroundIndex(16);
          case "Yellow70":
            return setBackgroundIndex(17);
          default:
            return setBackgroundIndex(0)
        }
        case "Ears":
          switch (name) {
            case "Default":
              return setEarsIndex(0);
              case "TiltBackward":
                return setEarsIndex(1);
                case "TiltForward":
                  return setEarsIndex(2);
                  default:
                    return setEarsIndex(0);
          }
          case "Accessories":
            switch (name) {
              case "Earings":
                return setAccessoryIndex(0);
                case "Flower":
                  return setAccessoryIndex(1);
                  case "Glasses":
                    return setAccessoryIndex(2);
                    case "Headphone":
                      return setAccessoryIndex(3);
                      default:
                        return setAccessoryIndex(0);
            }
            case "Eyes"
    }
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
