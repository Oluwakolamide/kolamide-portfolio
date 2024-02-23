import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Contact from "./components/contact";
import { StyledApp } from "./styles/app.style";
import GlobalStyle from "./styles/GlobalStyle";
import Footer from "./components/footer";
import Experience from "./components/experience";
import Projects from "./components/projects";
import SplashScreen from "./components/splashscreen";
// import { useEffect, useState } from "react";
import useLoading from "./hooks/useLoading";

function App() {
  const { loading, isMounted, isLoaded } = useLoading();

  return (
    <>
      <GlobalStyle />
      <SplashScreen progress={loading} mounted={isMounted} stopped={isLoaded} />
      <StyledApp>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </StyledApp>
    </>
  );
}

export default App;
