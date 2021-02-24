import { fonts } from "../helpers/fonts"
import { FigletControls } from "../figlet/FigletControls"

const fontList = Object.values(fonts).sort((a,b) => a.fontKey.localeCompare(b.fontKey))

export function Multiple() {
    return (
      <FigletControls items={fontList} />
    )
  }
  