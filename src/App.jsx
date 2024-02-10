import { useState } from "react";
import "./App.css";
import ToogleSwitch from "./components/UI/ToogleSwitch/ToogleSwitch";
import {useSelector} from 'react-redux'
import MyNavbar from "./components/UI/MyNavbar/MyNavbar";
import AboutMe from "./components/AboutMe";
import AboutSkills from "./components/AboutSkills";
import AboutProjects from "./components/AboutProjects";
import MyLinks from "./components/MyLinks";
function App() {
  const theme = useSelector((state) => (state.theme))
  return (
    <div className={'App ' + theme}>
      <MyNavbar></MyNavbar>
      <AboutMe></AboutMe>
      <AboutSkills></AboutSkills>
      <AboutProjects></AboutProjects>
      <MyLinks></MyLinks>
    </div>
  );
}

export default App;
