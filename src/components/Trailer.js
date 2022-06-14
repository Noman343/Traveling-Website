import React from "react";
import './trailer.css'

function Trailer() {
  return (
    <>
      <div className="hero-container2">
        <video src="/videos/video-1.mp4" autoPlay loop muted />
        
        <div className="container-fluid">
          <div className="text-center text-white">
            <div className="container">
              <section className="p-3">
                <div className="row d-flex justify-content-center">
                  <div className="col-lg-8">
                    <div className="ratio ratio-16x9 video">
                      <iframe
                        className="shadow-1-strong rounded"
                        src="https://www.youtube.com/embed/CrYZ3ODWduc"
                        title="YouTube video"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </section>
              <button type="button" className="btn btn-lg btn-outline-light">
                GET STARTED
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Trailer;
