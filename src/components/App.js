import React, {Component} from "react";
import "./App.css";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import CountriesPage from "../Pages/CountriesPage/CountriesPage";
import CountryPage from "../Pages/CountryPage/CountryPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Countries Of The World</h1>
        </header>
        <main>
          <BrowserRouter>
            <Switch>
              <Route path="/:name">
                <CountryPage />
              </Route>
              <Route path="/">
                <CountriesPage />
              </Route>
            </Switch>
          </BrowserRouter>
        </main>
      </div>
    );
  }
}

export default App;
