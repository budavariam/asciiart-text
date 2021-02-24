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

export default function App() {
    return (<Router>
        <Container>
            <AppBar position="static" color="inherit" elevation={0} >
                <Toolbar>
                    <Link component={Button} to="/">Single</Link>
                    <Link component={Button} to="/multi">Multiple</Link>
                    <Link component={Button} to="/favourites">Favourites</Link>
                </Toolbar>
            </AppBar>
            <Switch>
                <Route path="/multi">
                    <Multiple />
                </Route>
                <Route path="/favourites">
                    <Favourites />
                </Route>
                <Route path="/">
                    <Single />
                </Route>
            </Switch>
        </Container>
    </Router>)
}
