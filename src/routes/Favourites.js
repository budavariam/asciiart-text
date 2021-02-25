import { fonts } from "../helpers/fonts"
import { FigletControls } from "../figlet/FigletControls"
import { FavouriteContextConsumer } from "../favourites/FavouriteContext"

export function Favourites() {
    return (
        <FavouriteContextConsumer>
            {(ctxValue) => {
                const fontList = Object
                    .keys(ctxValue.favourites)
                    .map((fontName) => fonts[fontName])
                    .sort((a, b) => a.fontKey.localeCompare(b.fontKey)) || null
                return (<FigletControls items={fontList} />)
            }}
        </FavouriteContextConsumer>
    )
}
