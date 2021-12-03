import { Login } from "./pages/Login";
import Main from './pages/Main';
import { GlobalStyle } from "./styles/global";
import { BrowserRouter, Route, Switch } from "react-router-dom";
export function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact render={Login} />
        <Route path="/main" render={() => <Main />} />
      </Switch>
    </BrowserRouter>
  );
}
