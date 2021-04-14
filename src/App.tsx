import { CountriesSearch, CountryDetail } from "./pages";
import * as ROUTES from "./constants/routes";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.DEFAULT}>
          <Redirect to="/Countries" />
        </Route>
        <Route exact path={[ROUTES.COUNTRIES_SEARCH, ROUTES.COUNTRIES_DEFAULT]}>
          <CountriesSearch />
        </Route>
        <Route exact path={ROUTES.COUNTRY_DETAIL}>
          <CountryDetail />
        </Route>
      </Switch>
    </Router>
  );
}
