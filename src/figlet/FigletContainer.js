import { useRef } from "react"
import { copyToClipboard } from "../helpers/clipboard"
import { Figlet } from "./Figlet"

export const FigletContainer = (props) => {
    const ref = useRef(null)
    return <div>
      <div>{props.font}</div>
      <Figlet {...props} ref={ref} />
      <button onClick={() => copyToClipboard(ref.current)}>Copy</button>
    </div>
  }
  