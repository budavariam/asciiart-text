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

export default function App() {
    return (<Router>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Single</Link>
                    </li>
                    <li>
                        <Link to="/multi">Multiple</Link>
                    </li>
                    <li>
                        <Link to="/favourites">Favourites</Link>
                    </li>
                </ul>
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
        </div>
    </Router>)
}
