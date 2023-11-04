import Marquee from "react-fast-marquee";
import project from "../Screenshot 2023-08-16 194313.png";
import adventour from "../Screenshot 2023-10-19 175921.png";
import overstock from "../Screenshot 2023-10-19 203410.png";
import youtube from "../Screenshot 2023-10-19 203908.png";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export const Projects = () => {
  return (
    <div
      className="mt-5 mb-5"
      id="projects"
      style={{ height: "100%", overflow: "auto", background: "black" }}
    >
      <Marquee speed={100} pauseOnHover={true} autoFill={true}>
        <h1 className="section-heading mx-5">PROJECTS </h1>
      </Marquee>
      <hr style={{ border: "0.5px solid white" }} />
      <div className="project-cards">
        <Parallax pages={3.1}>
          <ParallaxLayer offset={0} speed={0} factor={0.5}>
            <div className="cards project-card p-4">
              <div className="row d-flex align-items-center g-5">
                <div className="col-lg-4 col-md-12">
                  <h1 className="section-heading project-title">
                    GREEN PARADISE
                  </h1>
                  <p className="b-text project-description">
                    An E-commerce website that has end to end funtionality from
                    Login to purchasing to checkout with RazorPay.
                  </p>
                  <h2>Tech Stack</h2>
                  <div className="d-flex gap-2">
                    <button className="btn2 project-tech-stack">HTML</button>
                    <button className="btn2 project-tech-stack">CSS</button>
                    <button className="btn2 project-tech-stack">
                      Bootstrap
                    </button>
                    <button className="btn2 project-tech-stack">
                      JavaScript
                    </button>
                    <button className="btn2 project-tech-stack">
                      Firebase
                    </button>
                  </div>
                </div>
                <div className="col-lg-8 col-md-12">
                  <img src={project} className="img-fluid" alt="" />
                  <div className="profile-links mt-5 d-flex gap-3 justify-content-center">
                    <a
                      className="project-github-link"
                      href="https://github.com/CodnanBaig/joyful-ring-9720"
                    >
                      <i className="fa-brands fa-github fa-2xl"></i>
                    </a>
                    <a href="https://green-paradise-plants.netlify.app/" className="project-deployed-link">
                      <i className="fa-solid fa-globe fa-2xl"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={0.9} speed={0.1} factor={0.5}>
            <div className="cards project-card p-4">
              <div className="row d-flex align-items-center g-5">
                <div className="col-lg-4 col-md-12">
                  <h1 className="section-heading project-title">ADVENTOUR</h1>
                  <p className="b-text project-description">
                    A stunning animated website that's user specific. Handles
                    the login through Firebase which also powers the backend and
                    also takes care of payments through RazorPay.
                  </p>
                  <h2>Tech Stack</h2>
                  <div className="d-flex gap-2">
                    <button className="btn2 project-tech-stack">React</button>
                    <button className="btn2 project-tech-stack">Redux</button>
                    <button className="btn2 project-tech-stack">
                      Bootstrap
                    </button>
                    <button className="btn2 project-tech-stack">Reveal</button>
                    <button className="btn2 project-tech-stack">
                      Firebase
                    </button>
                  </div>
                </div>
                <div className="col-lg-8 col-md-12">
                  <img src={adventour} className="img-fluid" alt="" />
                  <div className="profile-links mt-5 d-flex gap-3 justify-content-center">
                    <a
                      className="project-github-link"
                      href="https://github.com/CodnanBaig/adventour"
                    >
                      <i className="fa-brands fa-github fa-2xl"></i>
                    </a>
                    <a href="https://adventourr-masai.netlify.app/" className="project-deployed-link">
                      <i className="fa-solid fa-globe fa-2xl"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={1.8} speed={0.7} factor={0.5}>
            <div className="cards project-card p-4">
              <div className="row d-flex align-items-center g-5">
                <div className="col-lg-4 col-md-12">
                  <h1 className="section-heading project-title">OverStock</h1>
                  <p className="b-text project-description">
                    A pure Vanilla JavaScript application rich in UI and
                    functionalities. Local stoarge was used to manage the state
                    of the data and authentication.
                  </p>
                  <h2>Tech Stack</h2>
                  <div className="d-flex gap-2">
                    <button className="btn2 project-tech-stack">HTML</button>
                    <button className="btn2 project-tech-stack">CSS</button>
                    <button className="btn2 project-tech-stack">
                      JavaScript
                    </button>
                  </div>
                </div>
                <div className="col-lg-8 col-md-12">
                  <img src={overstock} className="img-fluid" alt="" />
                  <div className="profile-links mt-5 d-flex gap-3 justify-content-center">
                    <a
                      className="project-github-link"
                      href="https://github.com/CodnanBaig/OverStock-project_"
                    >
                      <i className="fa-brands fa-github fa-2xl"></i>
                    </a>
                    <a href="overstock-clone-vanilla.netlify.app" className="project-deployed-link">
                      <i className="fa-solid fa-globe fa-2xl"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={1.5}>
            <div className="cards project-card p-4">
              <div className="row d-flex align-items-center g-5">
                <div className="col-lg-4 col-md-12">
                  <h1 className="section-heading project-title">
                    YouTube Clone
                  </h1>
                  <p className="b-text project-description">
                    A basic YouTube clone using VanillaJs along with YouTube's
                    API. You can see the homepage, the view video page and the
                    search funtionality also works.
                  </p>
                  <h2>Tech Stack</h2>
                  <div className="d-flex gap-2">
                    <button className="btn2 project-tech-stack">HTML</button>
                    <button className="btn2 project-tech-stack">CSS</button>
                    <button className="btn2 project-tech-stack">
                      Bootstrap
                    </button>
                    <button className="btn2 project-tech-stack">
                      JavaScript
                    </button>
                  </div>
                </div>
                <div className="col-lg-8 col-md-12">
                  <img src={youtube} className="img-fluid" alt="" />
                  <div className="profile-links mt-5 d-flex gap-3 justify-content-center">
                    <a
                      className="project-github-link"
                      href="https://github.com/CodnanBaig/Vanilla-Youtube-Clone"
                    >
                      <i className="fa-brands fa-github fa-2xl"></i>
                    </a>
                    <a href="https://youtube-clone-basic.netlify.app/" className="project-deployed-link">
                      <i className="fa-solid fa-globe fa-2xl"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>
    </div>
  );
};
