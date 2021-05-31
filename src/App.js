import { Route, Switch } from "react-router-dom";
import "./index.css";
import Homepage from "./pages/HomePage";
import SearchResults from "./pages/SearchResults";
import Preview from "./pages/Preview";
function App() {
  return (
    <div className="">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/search" component={SearchResults} />
        <Route exact path="/anime/:id" component={Preview} />
      </Switch>
    </div>
  );
}
export default App;
