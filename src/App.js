import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import { useState } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function MApp() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.title = "TextUtils - Home Dark";
    }else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "TextUtils - Home Light";
    }
  }

  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <div className="container my-3">
          {/* <Switch> */}
            {/* <Route exact path="/"> */}
              <TextForm heading="Enter text below to analyze" mode={mode} />
            {/* </Route>
            <Route exact path="/about"> */}
              {/* <About /> */}
            {/* </Route> */}
          {/* </Switch> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default MApp;
