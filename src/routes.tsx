import { Route, Switch, BrowserRouter } from "react-router-dom";

import HomePage from './pages/HomePage';
import Recovery from "./pages/RecoveryPage";
import RegisterPage from "./pages/RegisterPage";


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/register" exact component={RegisterPage}/>
        <Route path="/recovery" exact component={Recovery}/>
      </Switch>
    </BrowserRouter>
      );
}