import "./utils/api";
import { GlobalStyles } from "./styles/global-styles";
import { AppWrapper, SideBar, AppLogo, AppBody } from "./styles/app-styles";
import OpendorseLogo from "./assets/logo-opendorse.png";
import { Athletes } from "./containers/athletes";

function App() {
  return (
    <div id="app">
      <GlobalStyles />
      <AppWrapper>
        <SideBar>
          <AppLogo src={OpendorseLogo} alt="Opendorse" />
        </SideBar>
        <AppBody className="ui grid container three column wide d-flex">
          <Athletes />
        </AppBody>
      </AppWrapper>
    </div>
  );
}

export default App;
