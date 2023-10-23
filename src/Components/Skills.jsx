import React from "react";
import { Marqee } from "../Components/Marqee";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export const Skills = () => {
  return (
    <div className="mt-5" id="skills">
      <Marqee title={"SKILLS"} />
      <Parallax pages={2}>
        <ParallaxLayer offset={0} speed={0}>
          <div className="frontend container p-5">
            <div className="row">
              <div className="col-lg-5 col-md-12 d-flex align-items-center">
                <h1 className="section-heading">FRONTEND SKILLS</h1>
              </div>
              <div className="col-1"></div>
              <div className="col-lg-5 col-md-12">
                <ul className="skills-li">
                  <div className="html">
                    <li className="skills-card-name">HTML</li>
                  </div>
                  <div className="css">
                    <li className="skills-card-name">CSS</li>
                  </div>
                  <div className="js">
                    <li className="skills-card-name">Javascript</li>
                  </div>

                  <div className="react">
                    <li className="skills-card-name">ReactJs</li>
                  </div>

                  <div className="bootstrap">
                    <li className="skills-card-name">Bootstrap</li>
                  </div>

                  <div className="angular">
                    <li className="skills-card-name">Angular 2+</li>
                  </div>

                  <div className="redux">
                    <li className="skills-card-name">Redux</li>
                  </div>

                  <div className="ts">
                    <li className="skills-card-name">TypeScript</li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.8}
          speed={0.2}
          style={{ height: "100%!important", backgroundColor: "black" }}
        >
          <div className="backend container p-5">
            <div className="row">
              <div className="col-lg-5 col-md-12">
                <ul className="skills-li">
                  <div className="node">
                    <li className="skills-card-name">NodeJs</li>
                  </div>

                  <div className="express">
                    <li className="skills-card-name">ExpressJs</li>
                  </div>

                  <div className="mongo">
                    <li className="skills-card-name">MongoDB</li>
                  </div>

                  <div className="mongoose">
                    <li className="skills-card-name">Mongoose</li>
                  </div>
                </ul>
              </div>
              <div className="col-1"></div>
              <div className="col-lg-5 col-md-12 d-flex align-items-center">
                <h1 className="section-heading">BACKEND SKILLS</h1>
              </div>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={2}
          style={{ backgroundColor: "black" }}
        >
          <div className="other container p-5">
            <div className="row">
              <div className="col-lg-5 col-md-12 d-flex align-items-center">
                <h1 className="section-heading">OTHER IMPORTANT SKILLS</h1>
              </div>
              <div className="col-1"></div>
              <div className="col-lg-5 col-md-12">
                <ul className="skills-li">
                  <div>
                    <li className="skills-card-name">Communication</li>
                  </div>

                  <div>
                    <li className="skills-card-name">Attention to Detail</li>
                  </div>

                  <div>
                    <li className="skills-card-name">Git</li>
                  </div>

                  <div>
                    <li className="skills-card-name">Shopify</li>
                  </div>

                  <div>
                    <li className="skills-card-name">Linux</li>
                  </div>

                  <div>
                    <li className="skills-card-name">Virtual Machines</li>
                  </div>

                  <div>
                    <li className="skills-card-name">Netlify</li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};
