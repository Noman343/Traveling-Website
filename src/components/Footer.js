import React from "react";
// import "./Footer.css";

function Footer() {
  return (
    <div className="container-fluid bg-dark">
      <footer className="text-center text-white bg-dark">
        <div className="container p-4">
          <section className="">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-6">
                <div className="ratio ratio-16x9 video">
                  <iframe
                    className="shadow-1-strong rounded"
                    src="https://www.youtube.com/embed/EILqvdxdc5c?controls=0"
                    title="YouTube video"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 Copyright :
          <i className="fab fa-typo3 ms-3"></i>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
