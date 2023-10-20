import React from "react";
import photo from "../Adnan Baig.png";

export const About = () => {
  const onButtonClick = () => {
    const pdfUrl =
      "https://drive.google.com/file/d/1GT_S42XE6axK8DBCPhJ4xYdHA0IbAp5U/view?usp=sharing";

    const openPDFInNewTab = () => {
      window.open(pdfUrl);
    };

    const downloadPDF = () => {
      fetch(pdfUrl)
        .then((response) => response.blob())
        .then((blob) => {
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.download = "Adnan-Baig-Resume.pdf"; // Specify the desired file name here
          link.style.display = "none";

          document.body.appendChild(link);
          link.click();

          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);
        })
        .catch((error) => {
          console.error("Error downloading PDF:", error);
        });
    };
    openPDFInNewTab();
    downloadPDF();
  };
  return (
    <section style={{ height: "100vh" }} id="about" className="about section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <p className="b-text text-center" id="user-detail-intro">
              <span style={{ fontSize: "38px" }}>F</span>rom a world of music
              and acting, I ventured into the realm of coding in 2021,
              discovering a passion for web development. Since that pivotal
              decision, I've immersed myself in the world of HTML, CSS, and
              JavaScript. <br /> <span style={{ fontSize: "38px" }}>M</span>y
              journey from a complete novice to a budding web developer has been
              both challenging and rewarding, and it continues to evolve with
              each line of code I write.
            </p>
            <p
              onClick={onButtonClick}
              className="btn1 p-0 d-flex justify-content-center"
            >
              <p className="mbrt-slot-hover">
                <span className="slot-mask">
                  <span
                    style={{ background: "red", padding: "5px" }}
                    className="slot-content"
                    hidden-slot-text="RESUME"
                  >
                    RESUME
                  </span>
                </span>
              </p>
            </p>
          </div>
          <div className="col-lg-5 col-md-12">
            <img
              src={photo}
              alt=""
              style={{ borderRadius: "30px" }}
              className="img-fluid home-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
