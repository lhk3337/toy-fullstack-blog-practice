import Routers from "components/Router";
import GlobalStyles from "lib/styles/GlobalStyles";
import { Helmet } from "react-helmet-async";
function App() {
  return (
    <>
      <Helmet>
        <title>REACTERS</title>
      </Helmet>
      <GlobalStyles />
      <Routers />
    </>
  );
}

export default App;
