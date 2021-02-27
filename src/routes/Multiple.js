import { fonts } from "../helpers/fonts"
import { FigletControls } from "../figlet/FigletControls"
import { FigletSettingsContextConsumer } from "../figlet/FigletSettingsContext"

const fontList = Object.values(fonts).sort((a, b) => a.fontKey.localeCompare(b.fontKey))

export function Multiple() {
  return (
    <FigletSettingsContextConsumer>
      {({ state, actionDispatch }) => {
        return <FigletControls
          items={fontList}
          figletSettingsState={state}
          figletSettingsAction={actionDispatch}
        />
      }}
    </FigletSettingsContextConsumer>
  )
}
