import "./utils/api";
import { GlobalStyles } from "./styles/global-styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AppWrapper, SideBar, AppLogo, AppBody, HomeButton} from "./styles/app-styles";
import StockLogo from "./assets/eTM7KKgjc.png";
import CardDashboard from "./containers/components/CardDashboard"
import Home from "./containers/pages/Home"
import ButtonForHome from "./containers/components/HomeButton"
import CardDetails from "./containers/components/CardDetails"

function App() {
  return (
    <div id="app">
      <Router>
      <GlobalStyles />
      <Switch>
      <Route path="/"  exact component={Home} />
        <Route path="/allCards">
        <AppWrapper  >
        <SideBar>
          <AppLogo src={StockLogo} alt="Stock" />
          <HomeButton ><ButtonForHome /></HomeButton>
        </SideBar>
        <AppBody>
          <CardDashboard />
        </AppBody>
      </AppWrapper>
        </Route>
        <Route path="/allCards/:id" exact component={<CardDetails />}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
