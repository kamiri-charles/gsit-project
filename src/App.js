import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { useNavbar } from "./utils/navbar_utils";
import "boxicons/css/boxicons.min.css"
import "./App.scss";

function App() {
  const { isNavOpen, toggleNav } = useNavbar();

  return (
    <div className="App">
      <Header isNavOpen={isNavOpen} toggleNav={toggleNav} />

      <Router basename="gsit-project">
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />

          <Route
            exact
            path="/"
            element={[
              <Navbar
                isNavOpen={isNavOpen}
                toggleNav={toggleNav}
                key="navbar"
              />,
              <Home key="home" />,
            ]}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
