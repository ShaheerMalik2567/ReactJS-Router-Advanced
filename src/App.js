import { Route, Switch, Redirect } from "react-router-dom";

import NewQuotes from "./Pages/NewQuote";
import AllQuotes from "./Pages/AllQuotes";
import QuotesDetails from "./Pages/QuoteDetails";

import Layout from "./components/layout/Layout";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes/" />
        </Route>

        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>

        <Route path="/quotes/:quotesid">
          <QuotesDetails />
        </Route>

        <Route path="/new-quotes">
          <NewQuotes />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
