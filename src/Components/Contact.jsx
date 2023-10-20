import React, { useState } from "react";
import emailjs from "emailjs-com";
import Toaster from "./Toaster";
import { Marqee } from "./Marqee";

export const Contact = () => {
  const form = document.getElementById("mainForm");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ntdgwh9",
        "template_orb61ef",
        form,
        "0dG8Fwmm2l1v59McB"
      )
      .then((res) => console.log(res.text))
      .then(() => <Toaster />)
      .catch((err) => console.log(err));
  };

  return (
    <section id="contact" style={{ color: "black" }} className="contact-section">
      <Marqee title={"CONTACT ME"}/>
      <div id="form" className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <div className="container">
          <div className="row pb-5">
            <div className="col-lg-6 col-md-12">
              <form id="mainForm" onSubmit={handleSubmit} action="">
                <div className="row g-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      required
                      className="form-control"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      required
                      type="email"
                      name="email"
                      className="form-control col-6"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <input
                  type="text"
                  required
                  name="subject"
                  placeholder="Subject"
                  className="form-control mt-3"
                  value={formData.subject}
                  onChange={handleChange}
                />
                <textarea
                  required  
                  name="message"
                  placeholder="Message"
                  className="form-control mt-3"
                  rows="10"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                <button className="btn2 mt-2">Send</button>
              </form>
            </div>
            <div className="col-lg-6 col-md-12 d-flex flex-column align-items-center justify-content-center">
              <p className="b-text mt-4 text-center" style={{ color: "black" }}>
                Feel free to contact me.
              </p>
              <div className="profile-links mt-4 d-flex gap-3 justify-content-center">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/CodnanBaig"
                  id="contact-github"
                >
                  <i
                    style={{ color: "black" }}
                    className="fa-brands fa-github fa-2xl"
                  ></i>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/adnan-baig-74b8aa21a/"
                  id="contact-linkedin"
                >
                  <i
                    style={{ color: "black" }}
                    className="fa-brands fa-linkedin fa-2xl"
                  ></i>
                </a>
              </div>
              <div className="contact text-center mt-5">
                <p className="b-text" id="contact-email"><i className="fa-solid fa-envelope"></i>: adnanbaigofficial@gmail.com</p>
                <p className="b-text" id="contact-phone"><i className="fa-solid fa-phone"></i>: +919004409014</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
