import { useState } from "react"
import './App.css'
import { Figlet } from './Figlet'
import { fonts } from "./fonts.js"


function App() {
  const [text, setText] = useState("Type Something")
  const [font, setFont] = useState(() => (fonts.font_Standard))
  return (
    <div className="App">
      <select onChange={(e) => {
        setFont(fonts[e.target.value])
      }}>
        {Object.entries(fonts).map(([fontKey, { name }]) => <option key={fontKey} value={fontKey}>{name}</option>)}
      </select>
      <textarea value={text} onChange={(e) => { setText(e.target.value) }}></textarea>
      <Figlet text={text} font={font.name} fontData={font.value} />
    </div>
  );
}

function MultiApp() {
  const [text, setText] = useState("Type Something")
  return (
    <div className="App">
      <textarea value={text} onChange={(e) => { setText(e.target.value) }}></textarea>
      {Object.values(fonts).map((font) => <Figlet key={font.name} text={text} font={font.name} fontData={font.value} />)}
    </div>
  );
}

export default MultiApp;
