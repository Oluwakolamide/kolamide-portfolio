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
import Projects from "./components/projects";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledApp>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
