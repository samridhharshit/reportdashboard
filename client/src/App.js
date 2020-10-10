import React from 'react';
import './App.css';
import {HashRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Container from "./component/Container";
import NavigationBar from "./modules/navbar";

function App() {
    return (
        <>
            <NavigationBar />
            <div className='App'>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Container} />
                        <Redirect to={'/'} />
                    </Switch>
                </Router>
            </div>
        </>
    );
}

export default App;
