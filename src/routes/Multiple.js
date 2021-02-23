import { FigletContainer } from "../figlet/FigletContainer"
import { useState } from "react"
import { fonts } from "../helpers/fonts"

export function Multiple() {
    const [text, setText] = useState("Type Something")
    const [width, setWidth] = useState(80)
    return <>
        <input type="number" min={0} max={3000} value={width} onChange={(e) => { setWidth(e.target.value) }} />
        <textarea value={text} onChange={(e) => { setText(e.target.value) }}></textarea>
        {Object.values(fonts).map((font) => <FigletContainer key={font.name} text={text} font={font.name} fontData={font.value} width={width} />)}
    </>
}