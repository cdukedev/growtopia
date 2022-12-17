import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";

import HomePage from "./pages/HomePage/HomePage";
import AddPlantPage from "./pages/AddPlantPage/AddPlantPage";
import SinglePlantPage from "./pages/SinglePlantPage/SinglePlantPage";
import TasksPage from "./pages/TasksPage/TasksPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path="/" to="/landing" exact component={HomePage}></Route>
          <Route
            path="/home"
            exact
            render={(routerProps) => {
              return <HomePage routerProps={routerProps} />;
            }}
          />
          <Route
            path="/plants"
            exact
            render={(routerProps) => {
              return <AddPlantPage routerProps={routerProps} />;
            }}
          />
          <Route
            path="/plants/:id"
            exact
            render={(routerProps) => {
              return <SinglePlantPage routerProps={routerProps} />;
            }}
          />
          <Route
            path="/tasks"
            exact
            render={(routerProps) => {
              return <TasksPage routerProps={routerProps} />;
            }}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
