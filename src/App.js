
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
          case "Blue 50":
            return setBackgroundIndex(0);
          case "Blue 60":
            return setBackgroundIndex(1);
          case "Blue 70":
            return setBackgroundIndex(2);
          case "Dark Blue 30":
            return setBackgroundIndex(3);
          case "Dark Blue 50":
            return setBackgroundIndex(4);
          case "Dark Blue 70":
            return setBackgroundIndex(5);
          case "Green 50":
            return setBackgroundIndex(6);
          case "Green 60":
            return setBackgroundIndex(7);
          case "Green 70":
            return setBackgroundIndex(8);
          case "Grey 40":
            return setBackgroundIndex(9);
          case "Grey 70":
            return setBackgroundIndex(10);
          case "Grey 80":
            return setBackgroundIndex(11);
          case "Red 50":
            return setBackgroundIndex(12);
          case "Red 60":
            return setBackgroundIndex(13);
          case "Red 70":
            return setBackgroundIndex(14);
          case "Yellow 50":
            return setBackgroundIndex(15);
          case "Yellow 60":
            return setBackgroundIndex(16);
          case "Yellow 70":
            return setBackgroundIndex(17);
          default:
            return setBackgroundIndex(0)
        }
      case "Ears":
        switch (name) {
          case "Default":
            return setEarsIndex(0);
          case "Tilt Backward":
            return setEarsIndex(1);
          case "Tilt Forward":
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
      case "Eyes":
        switch (name) {
          case "Default":
            return setEyesIndex(0);
          case "Angry":
            return setEyesIndex(1);
          case "Naughty":
            return setEyesIndex(2);
          case "Panda":
            return setEyesIndex(3);
          case "Smart":
            return setEyesIndex(4);
          case "Star":
            return setEyesIndex(5);
          default:
            return setEyesIndex(0);
        }
      case "Hair":
        switch (name) {
          case "Default":
            return setHairIndex(0);
          case "Bang":
            return setHairIndex(1);
          case "Curls":
            return setHairIndex(2);
          case "Elegant":
            return setHairIndex(3);
          case "Fancy":
            return setHairIndex(4);
          case "Quiff":
            return setHairIndex(5);
          case "Short":
            return setHairIndex(6);
          default:
            return setHairIndex(0);
        }
      case "Leg":
        switch (name) {
          case "Default":
            return setLegIndex(0);
          case "Bubble ":
            return setLegIndex(1);
          case "Cookie":
            return setLegIndex(2);
          case "Game Console":
            return setLegIndex(3);
          case "Tilt Backward":
            return setLegIndex(4);
          case "Tilt Forward":
            return setLegIndex(5);
          default:
            return setLegIndex(0);
        }
      case "Mouth":
        switch (name) {
          case "Default":
            return setMouthIndex(0);
          case "Astonished":
            return setMouthIndex(1);
          case "Eating":
            return setMouthIndex(2);
          case "Laugh":
            return setMouthIndex(3);
          case "Tongue":
            return setMouthIndex(4);
          default:
            return setMouthIndex(0);
        }
      case "Neck":
        switch (name) {
          case "Default":
            return setNeckIndex(0);
          case "Thick":
            return setNeckIndex(1);
          case "Bend Forward":
            return setNeckIndex(2);
          case "Bend Backward":
            return setNeckIndex(3);
          default:
            return setNeckIndex(0);
        }
      default:
        return null;
    }

  }

  const setStyle = () => {
    switch (selectedAccessory) {
      case "Background":
        return backgrounds;
      case "Accessories":
        return accessories;
      case "Ears":
        return ears;
      case "Eyes":
        return eyes;
      case "Hair":
        return hair;
      case "Leg":
        return leg;
      case "Mouth":
        return mouth;
      case "Neck":
        return neck;
      default:
        return null;

    }
  }
  const downloadImage = () => {
    mergeImages([
      backgrounds[backgroundIndex].img,
      ears[earsIndex].img,
      eyes[eyesIndex].img,
      neck[neckIndex].img,
      mouth[mouthIndex].img,
      nose,
      hair[hairIndex].img,
      leg[legIndex].img,
      accessories[accessoryIndex].img
    ])
      .then(b64 => {
        saveAs(b64, "Alpaca.png");
      });
  }
  return (

    <div className={styles.container}>
      <section>
        <h1 className={styles.heading}>ALPACA GENERATOR</h1>
      </section>
      <section className={styles.grid_col}>
        <div className={styles.grid_row_2}>
          <div className={`${styles.row} ${styles.relative}`}>
            <Background img={backgrounds[backgroundIndex].img} />
            <Ears img={ears[earsIndex].img} />
            <Neck img={neck[neckIndex].img} />
            <Leg img={leg[legIndex].img} />
            <Nose />
            <Hair img={hair[hairIndex].img} />
            <Accessories img={accessories[accessoryIndex].img} />
            <Eyes img={eyes[eyesIndex].img} />
            <Mouth img={mouth[mouthIndex].img} />
          </div>
          <div className={styles.grid_col}>
            <FlatButton icon="ð" text="Random" onClick={randomize} />
            <FlatButton icon="ð¼ï¸" text="Download" onClick={downloadImage} />
          </div>
        </div>
        <div className={`${styles.column} ${styles.margin_left}`}>
          <div className={styles.column}>
            <h3 className={styles.heading_h3}>ACCESSORIZE THE ALPACA'S</h3>
            <div className={`${styles.column} ${styles.margin_botton}`}>
              <div className={styles.grid_col_3}>
                <RoundButton name="Hair" active={selectedAccessory}
                  onClick={e => {
                    setStyle();
                    selectAccessoriesButton(e)
                  }} />
                <RoundButton name="Ears" active={selectedAccessory}
                  onClick={e => {
                    setStyle();
                    selectAccessoriesButton(e)
                  }} />
                <RoundButton name="Eyes" active={selectedAccessory}
                  onClick={e => {
                    setStyle();
                    selectAccessoriesButton(e)
                  }} />
              </div>
              <div className={styles.grid_col_3}>
                <RoundButton name="Mouth" active={selectedAccessory}
                  onClick={e => {
                    setStyle();
                    selectAccessoriesButton(e)
                  }} />
                <RoundButton name="Neck" active={selectedAccessory}
                  onClick={e => {
                    setStyle();
                    selectAccessoriesButton(e)
                  }} />
                <RoundButton name="Leg" active={selectedAccessory}
                  onClick={e => {
                    setStyle();
                    selectAccessoriesButton(e)
                  }} />
              </div>
              <div className={styles.grid_col_2}>
                <RoundButton name="Accessories" active={selectedAccessory}
                  onClick={e => {
                    setStyle();
                    selectAccessoriesButton(e)
                  }} />
                <RoundButton name="Background" active={selectedAccessory}
                  onClick={e => {
                    setStyle();
                    selectAccessoriesButton(e)
                  }} />
              </div>
            </div>
          </div>
          <div>
            <h3 className={styles.heading_h3}>STYLE</h3>
            <div className={styles.grid_col_3_auto_row}>
              {
                setStyle() && setStyle().map((item, index) => (
                  <RoundButton key={index} name={item.name} active={selectedStyle}
                    onClick={() => selectStylesButton(item.name)} />
                ))
              }
            </div>
          </div>
        </div>
      </section>
    </div>

  )

}

export default App;


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
