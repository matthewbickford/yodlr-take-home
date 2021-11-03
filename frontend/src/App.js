import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";
import Routes from "./Routes";
import yodlrApi from "./api/api";


function App() {

  async function signup(signupData) {
    try {
      let user = await yodlrApi.register(signupData);
      if (user) {
        return { success: true };
      }
    } catch (errors) {
      console.error("signup failed", errors);
      return { success: false, errors };
    }
  }

  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Routes signup={signup}/>
      </div>
    </BrowserRouter>
  );

}

export default App;
