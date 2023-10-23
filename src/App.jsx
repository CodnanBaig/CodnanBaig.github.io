import { Hero } from "./Components/Hero";
import { About } from "./Components/About";
import { Skills } from "./Components/Skills";
import { Projects } from "./Components/Projects";
import { Contact } from "./Components/Contact";
import { Marqee } from "./Components/Marqee";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { GitHub } from "./Components/GitHub";
import { MyNavbar } from "./Components/MyNavbar";
import {
  Parallax,
  ParallaxBanner,
  ParallaxBannerLayer,
} from "react-scroll-parallax";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <ParallaxBanner style={{ height: "100vh" }}>
        <ParallaxBannerLayer
          image="https://images.unsplash.com/photo-1550684376-efcbd6e3f031?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2670"
          speed={20}
        />
      </ParallaxBanner>
      <Parallax translateY={[-105, -150]} speed={20}>
        <Hero />
      </Parallax>
      <Parallax translateY={[-30, -190]} speed={70} style={{background: "white", color: "black", height: "100%"}}>
        <Marqee title={"ABOUT ME"} />
        <About />
      </Parallax>
      <Parallax translateY={[-50, -150]} speed={80} style={{ height: "100vh"}}>
        <Skills />
      </Parallax>
      <Parallax
        translateY={[-10, -200]}
        speed={150}
        style={{ height: "100%" }}
      >
        <Projects />
      </Parallax>
      <GitHub />
      <Parallax style={{ backgroundColor: "white" }}>
        <Contact />
      </Parallax>
    </div>
  );
}

export default App;
