import "./utils/api";
import { GlobalStyles } from "./styles/global-styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AppWrapper, SideBar, AppLogo, AppBody} from "./styles/app-styles";
import OpendorseLogo from "./assets/logo-opendorse.png";
import AthleteDashboard from "./containers/components/AthleteDashboard"
import Home from "./containers/pages/Home"

function App() {
  return (
    <div id="app">
      <Router>
      <GlobalStyles />
      
      <Switch>
      {/* <Home path="/"/>  */}
      <Route path="/"  exact component={Home} />
        <Route path="/allAthletes">
        <AppWrapper  >
        <SideBar>
          <AppLogo src={OpendorseLogo} alt="Opendorse" />
        </SideBar>
        <AppBody>
          <AthleteDashboard />
        </AppBody>
      </AppWrapper>
        </Route>
      </Switch>
      
      </Router>
    </div>
  );
}

export default App;
