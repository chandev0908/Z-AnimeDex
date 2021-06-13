import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { HomepageContext } from "./Context/HomepageContext";
import "./tailwind.css";
import Homepage from "./pages/HomePage";
import Preview from "./pages/Preview";
import SearchResults from "./pages/SearchResults";

function App() {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  return (
    <HomepageContext.Provider value={{ toggleSidebar, setToggleSidebar }}>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/search/:query" component={SearchResults} />
          <Route exact path="/anime/:id" component={Preview} />
        </Switch>
      </div>
    </HomepageContext.Provider>
  );
}
export default App;
