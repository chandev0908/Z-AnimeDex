import { Route, Switch } from "react-router-dom";
import "./index.css";
import Homepage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
function App() {
  return (
    <div className="">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path='/search' component={SearchPage} />
      </Switch>
    </div>
  );
}
export default App;
