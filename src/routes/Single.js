import { useState } from "react"
import { Figlet } from '../figlet/Figlet'
import { fonts } from "../helpers/fonts.js"


export function Single() {
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
