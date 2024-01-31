//import Socials from "./components/sections/socials";
//import Title from "./components/sections/title";
//import Technologies from "./components/sections/technologies";
//import Button from "./components/sections/button";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Contact from "./components/contact";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { StyledApp } from "./styles/app.style";
import GlobalStyle from "./styles/GlobalStyle";
import Footer from "./components/footer";
import Experience from "./components/experience";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledApp>
        {/* <Socials/> */}
        {/* <Title sn={"01"} title={"Meet me"}/> */}
        {/* <Technologies tech={"HTML"}/> */}
        {/* <Button text={"Download my resume"}/> */}
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Contact />
        <Footer />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
