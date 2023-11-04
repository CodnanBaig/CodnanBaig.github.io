import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Parallax } from "react-scroll-parallax";

export const GitHub = () => {
  return (
    <div className="container text-center mt-5">
      <h1 className="section-heading">GitHub Stats</h1>
      <div className="row mt-5 g-3">
        <div className="col-lg-6">
          <Parallax speed={70} translateY={[90, -90]}>
            <GitHubCalendar username="CodnanBaig" />
          </Parallax>
        </div>

        <div className="col-lg-6">
          <Parallax speed={30} translateY={[110, -90]}>
            <img
              src="https://camo.githubusercontent.com/c6e01d74c7e30d601fc3d9edebc06874a828ab3224ec50bf858cc623a4022d18/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d436f646e616e42616967267468656d653d6461726b2673686f775f69636f6e733d7472756526686964655f626f726465723d7472756526636f756e745f707269766174653d74727565"
              className="img-fluid github-stats-card"
              alt=""
            />
          </Parallax>
        </div>
        <div className="col-lg-6">
        <Parallax speed={100} translateY={[-100, 80]}>
          <img
            src={
              "https://camo.githubusercontent.com/24495c938ae94360a639d7fc92947f237257993b78758f2bb5909c68b7453a69/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d436f646e616e42616967267468656d653d6461726b26686964655f626f726465723d74727565"
            }
            alt=""
            className="img-fluid mt-4 github-streak-stats"
          />
          </Parallax>
        </div>
        <div className="col-lg-6">
        <Parallax speed={130} translateY={[-50, 50]}>
          <img
            src="https://camo.githubusercontent.com/1575c7bfa4b80a79c855b51976e391f0b68336c6ae79841606c8485ecfc6fdca/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67732f3f757365726e616d653d436f646e616e42616967267468656d653d6461726b2673686f775f69636f6e733d7472756526686964655f626f726465723d74727565266c61796f75743d636f6d70616374"
            className="img-fluid mt-4 github-top-langs"
            alt=""
          />
          </Parallax>
        </div>
      </div>
    </div>
  );
};
