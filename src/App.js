import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
import { Favourites } from "./routes/Favourites"
import { Multiple } from "./routes/Multiple"
import { Single } from "./routes/Single"
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import { Toolbar, AppBar } from "@material-ui/core"
import { FavouriteContextProvider } from "./favourites/FavouriteContext"
import { version } from '../package.json'

export default function App() {
    return (<Router basename={process.env.PUBLIC_URL} >
        <FavouriteContextProvider>
            <Container>
                <AppBar position="static" color="inherit" elevation={0} >
                    <Toolbar>
                        <Button component={Link} to="/">Single</Button>
                        <Button component={Link} to="/multi">Multiple</Button>
                        <Button component={Link} to="/favourites">Favourites</Button>
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
        </FavouriteContextProvider>
    </Router>)
}
