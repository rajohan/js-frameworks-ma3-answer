import { BrowserRouter, Switch, Route } from "react-router-dom";

import PageList from "./components/PageList";
import PageDetail from "./components/PageDetail";
import Navigation from "./components/Navigation";

const App = () => {
    return (
        <BrowserRouter>
            <Navigation />
            <Switch>
                <Route path="/" exact>
                    <PageList />
                </Route>
                <Route path="/page/:id">
                    <PageDetail />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
