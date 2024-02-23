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
import useLoading from "./hooks/useLoading";
import useBodyOverflow from "./hooks/useBodyOverflow";

function App() {
  const { loading, isMounted, isLoaded } = useLoading();
  useBodyOverflow(isMounted);

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
