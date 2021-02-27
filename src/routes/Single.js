import { FigletControls } from "../figlet/FigletControls.js"
import { FigletSettingsContextConsumer } from "../figlet/FigletSettingsContext.js"

export function Single() {
  return (
    <FigletSettingsContextConsumer>
      {({ state, actionDispatch }) => {
        return <FigletControls
          items={null}
          figletSettingsAction={actionDispatch}
          figletSettingsState={state}
        />
      }}
    </FigletSettingsContextConsumer>
  )
}
