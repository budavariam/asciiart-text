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
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Container from '@material-ui/core/Container'

export default function App() {
    return (<Router>
        <Container>
            <nav>
                <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                    <Link component={Button} to="/">Single</Link>
                    <Link component={Button} to="/multi">Multiple</Link>
                    <Link component={Button} to="/favourites">Favourites</Link>
                </ButtonGroup>
            </nav>
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
