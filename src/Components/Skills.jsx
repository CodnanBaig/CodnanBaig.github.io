import React from "react";
import {Marqee} from '../Components/Marqee';
import ProgressBar from "@ramonak/react-progress-bar";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export const Skills = () => {
  return (
    <div className="mt-5" id="skills" style={{height: "100vh"}}>
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
                    <ProgressBar
                      completed="90"
                      bgColor="red"
                      height="10px"
                      borderRadius="0"
                      labelSize="10px"
                      baseBgColor="white"
                      animateOnRender
                    />
                  </div>
                  <div className="css">
                    <li className="skills-card-name">CSS</li>
                    <ProgressBar
                      completed="90"
                      bgColor="red"
                      height="10px"
                      borderRadius="0"
                      labelSize="10px"
                      baseBgColor="white"
                      animateOnRender
                    />
                  </div>
                  <div className="js">
                    <li className="skills-card-name">Javascript</li>
                    <ProgressBar
                      completed="80"
                      bgColor="red"
                      height="10px"
                      borderRadius="0"
                      labelSize="10px"
                      baseBgColor="white"
                      animateOnRender
                    />
                  </div>

                  <div className="react">
                    <li className="skills-card-name">ReactJs</li>
                    <ProgressBar
                      completed="80"
                      bgColor="red"
                      height="10px"
                      borderRadius="0"
                      labelSize="10px"
                      baseBgColor="white"
                      animateOnRender
                    />
                  </div>

                  <div className="bootstrap">
                    <li className="skills-card-name">Bootstrap</li>
                    <ProgressBar
                      completed="90"
                      bgColor="red"
                      height="10px"
                      borderRadius="0"
                      labelSize="10px"
                      baseBgColor="white"
                      animateOnRender
                    />
                  </div>

                  <div className="angular">
                    <li className="skills-card-name">Angular 2+</li>
                    <ProgressBar
                      completed="70"
                      bgColor="red"
                      height="10px"
                      borderRadius="0"
                      labelSize="10px"
                      baseBgColor="white"
                      animateOnRender
                    />
                  </div>

                  <div className="redux">
                    <li className="skills-card-name">Redux</li>
                    <ProgressBar
                      completed="70"
                      bgColor="red"
                      height="10px"
                      borderRadius="0"
                      labelSize="10px"
                      baseBgColor="white"
                      animateOnRender
                    />
                  </div>

                  <div className="ts">
                    <li className="skills-card-name">TypeScript</li>
                    <ProgressBar
                      completed="60"
                      bgColor="red"
                      height="10px"
                      borderRadius="0"
                      labelSize="10px"
                      baseBgColor="white"
                      animateOnRender
                    />
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
                    <ProgressBar
                      completed="70"
                      bgColor="red"
                      height="10px"
                      borderRadius="0"
                      labelSize="10px"
                      baseBgColor="white"
                      animateOnRender
                    />
                  </div>

                  <div className="express">
                    <li className="skills-card-name">ExpressJs</li>
                    <ProgressBar
                      completed="80"
                      bgColor="red"
                      height="10px"
                      borderRadius="0"
                      labelSize="10px"
                      baseBgColor="white"
                      animateOnRender
                    />
                  </div>

                  <div className="mongo">
                    <li className="skills-card-name">MongoDB</li>
                    <ProgressBar
                      completed="80"
                      bgColor="red"
                      height="10px"
                      borderRadius="0"
                      labelSize="10px"
                      baseBgColor="white"
                      animateOnRender
                    />
                  </div>

                  <div className="mongoose">
                    <li className="skills-card-name">Mongoose</li>
                    <ProgressBar
                      completed="80"
                      bgColor="red"
                      height="10px"
                      borderRadius="0"
                      labelSize="10px"
                      baseBgColor="white"
                      animateOnRender
                    />
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
          style={{ height: "100%!important", backgroundColor: "black" }}
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
                    <ProgressBar
                      completed="95"
                      bgColor="red"
                      height="10px"
                      borderRadius="0"
                      labelSize="10px"
                      baseBgColor="white"
                      animateOnRender
                    />
                  </div>

                  <div>
                    <li className="skills-card-name">Punctuality</li>
                    <ProgressBar
                      completed="90"
                      bgColor="red"
                      height="10px"
                      borderRadius="0"
                      labelSize="10px"
                      baseBgColor="white"
                      animateOnRender
                    />
                  </div>

                  <div>
                    <li className="skills-card-name">Attention to Detail</li>
                    <ProgressBar
                      completed="80"
                      bgColor="red"
                      height="10px"
                      borderRadius="0"
                      labelSize="10px"
                      baseBgColor="white"
                      animateOnRender
                    />
                  </div>

                  <div>
                    <li className="skills-card-name">aaPanel</li>
                    <ProgressBar
                      completed="70"
                      bgColor="red"
                      height="10px"
                      borderRadius="0"
                      labelSize="10px"
                      baseBgColor="white"
                      animateOnRender
                    />
                  </div>

                  <div>
                    <li className="skills-card-name">Git</li>
                    <ProgressBar
                      completed="80"
                      bgColor="red"
                      height="10px"
                      borderRadius="0"
                      labelSize="10px"
                      baseBgColor="white"
                      animateOnRender
                    />
                  </div>

                  <div>
                    <li className="skills-card-name">Shopify</li>
                    <ProgressBar
                      completed="70"
                      bgColor="red"
                      height="10px"
                      borderRadius="0"
                      labelSize="10px"
                      baseBgColor="white"
                      animateOnRender
                    />
                  </div>

                  <div>
                    <li className="skills-card-name">Linux</li>
                    <ProgressBar
                      completed="70"
                      bgColor="red"
                      height="10px"
                      borderRadius="0"
                      labelSize="10px"
                      baseBgColor="white"
                      animateOnRender
                    />
                  </div>

                  <div>
                    <li className="skills-card-name">Server Management</li>
                    <ProgressBar
                      completed="70"
                      bgColor="red"
                      height="10px"
                      borderRadius="0"
                      labelSize="10px"
                      baseBgColor="white"
                      animateOnRender
                    />
                  </div>

                  <div>
                    <li className="skills-card-name">Virtual Machines</li>
                    <ProgressBar
                      completed="80"
                      bgColor="red"
                      height="10px"
                      borderRadius="0"
                      labelSize="10px"
                      baseBgColor="white"
                      animateOnRender
                    />
                  </div>

                  <div>
                    <li className="skills-card-name">Netlify</li>
                    <ProgressBar
                      completed="90"
                      bgColor="red"
                      height="10px"
                      borderRadius="0"
                      labelSize="10px"
                      baseBgColor="white"
                      animateOnRender
                    />
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
