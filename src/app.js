import "./utils/api";
import { GlobalStyles } from "./styles/global-styles";
import { AppWrapper, SideBar, AppLogo, AppBody} from "./styles/app-styles";
import OpendorseLogo from "./assets/logo-opendorse.png";
import AthleteDashboard from "./containers/athleteDashboard/AthleteDashboard";

function App() {
  return (
    <div id="app">
      <GlobalStyles />
      <AppWrapper>
        <SideBar>
          <AppLogo src={OpendorseLogo} alt="Opendorse" />
        </SideBar>
        <AppBody>
          <AthleteDashboard />
        </AppBody>
      </AppWrapper>
    </div>
  );
}

export default App;
