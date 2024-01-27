//import Socials from "./components/sections/socials";
//import Title from "./components/sections/title";
//import Technologies from "./components/sections/technologies";
//import Button from "./components/sections/button";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Contact from "./components/contact";

function App() {
  return (
    <div className="App">
      {/* <Socials/> */}
      {/* <Title sn={"01"} title={"Meet me"}/> */}
      {/* <Technologies tech={"HTML"}/> */}
      {/* <Button text={"Download my resume"}/> */}
      <Navbar />
      <Hero />
      <About />
      <Contact />
    </div>
  );
}

export default App;
