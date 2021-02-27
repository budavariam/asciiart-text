import { fonts } from "../helpers/fonts"
import { FigletControls } from "../figlet/FigletControls"
import { FavouriteContextConsumer } from "../favourites/FavouriteContext"
import { FigletSettingsContextConsumer } from "../figlet/FigletSettingsContext"

export function Favourites() {
    return <FavouriteContextConsumer>
        {(ctxValue) => {
            const fontList = Object
                .keys(ctxValue.favourites)
                .map((fontName) => fonts[fontName])
                .sort((a, b) => a.fontKey.localeCompare(b.fontKey)) || null
            return <FigletSettingsContextConsumer>
                {({ state, actionDispatch }) => {
                    return <FigletControls
                        items={fontList}
                        figletSettingsState={state}
                        figletSettingsAction={actionDispatch}
                    />
                }}
            </FigletSettingsContextConsumer>
        }}
    </FavouriteContextConsumer>
}
