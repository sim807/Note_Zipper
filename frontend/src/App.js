import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import LandingPage from "./Screens/LandingPage/LandingPage";
import { BrowserRouter, Route } from "react-router-dom";
import MyNotes from "./Screens/MyNotes/MyNotes";
import RegisterPage from "./Screens/RegisterPage/RegisterPage";
import LoginPage from "./Screens/LoginPage/LoginPage";
import CreateNote from "./Screens/createNote/CreateNote";
import SingleNote from "./Screens/singleNote/SingleNote";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Route path="/" component={LandingPage} exact />
        <Route path="/login" component={LoginPage} />
        <Route path="/createNote" component={CreateNote} />
        <Route path="/note/:id" component={SingleNote} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/mynotes" component={MyNotes} />
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
