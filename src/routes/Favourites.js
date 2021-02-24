import { fonts } from "../helpers/fonts"
import { FigletControls } from "../figlet/FigletControls"
import { getFavourites } from "../helpers/favourites"


export function Favourites() {
    const fontList = Object.keys(getFavourites()).map((fontName) => fonts[fontName]).sort((a, b) => a.fontKey.localeCompare(b.fontKey)) || null
    return (
        <FigletControls items={fontList} />
    )
}
