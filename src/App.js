import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom"
import { Favourites } from "./routes/Favourites"
import { Multiple } from "./routes/Multiple"
import { Single } from "./routes/Single"
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Toolbar from "@material-ui/core/Toolbar"
import AppBar from "@material-ui/core/AppBar"
import { FavouriteContextProvider } from "./favourites/FavouriteContext"
import { FigletSettingsContextProvider } from "./figlet/FigletSettingsContext"
import { version } from '../package.json'

export default function App() {
    return (<Router basename={process.env.PUBLIC_URL} >
        <FavouriteContextProvider>
            <FigletSettingsContextProvider>
                <Container>
                    <AppBar position="static" color="inherit" elevation={0} >
                        <Toolbar>
                            <Button component={NavLink} activeClassName="is-active" to="/" exact={true}>Single</Button>
                            <Button component={NavLink} activeClassName="is-active" to="/multi">Multiple</Button>
                            <Button component={NavLink} activeClassName="is-active" to="/favourites">Favourites</Button>
                        </Toolbar>
                    </AppBar>
                    <Switch>
                        <Route path="/multi">
                            <Multiple />
                        </Route>
                        <Route path="/favourites">
                            <Favourites />
                        </Route>
                        <Route path="/version">
                            {version}
                        </Route>
                        <Route path="/">
                            <Single />
                        </Route>
                    </Switch>
                </Container>
            </FigletSettingsContextProvider>
        </FavouriteContextProvider>
    </Router>)
}
