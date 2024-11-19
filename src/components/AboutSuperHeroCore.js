import React from "react";
import image_1 from "../assets/images/about/volume/1.png";
import image_2 from "../assets/images/about/volume/2.png";
import image_3 from "../assets/images/about/volume/3.png";
import image_4 from "../assets/images/about/volume/4.png";
import image_5 from "../assets/images/about/volume/5.png";

const AboutSuperHeroCore = () => {
  return (
    <section className="d-flex flex-column align-items-center text-bg-dark py-5 bg-white">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-start">
            <h1 className="jomhuria fw-bold text-dark">SuperHero's core</h1>
          </div>
        </div>

        <div className="row mb-5 align-items-center">
          <div className="col-12 col-md-4 d-flex justify-content-center mb-4 mb-md-0">
            <img
              src={image_1}
              alt="Tall Narrow Image 1"
              className="img-fluid"
              style={{ maxWidth: "400px", height: "auto" }}
            />
          </div>
          <div className="col-12 col-md-4 text-center">
            <p className="jomhuria fw-bold text-dark fs-2">Volume approach.</p>
            Mostly promoted by Arnold Schwarzenegger in his encyclopedias.
            <div class="jomhuria fw-bold text-dark fs-5">
              This approach says that person should do mostly more than 3-4 sets of 1 exercise per body part and may not
              reach the failure for muscle growth.
            </div>
            <div class="jomhuria fw-bold text-dark fs-5">
              This approach actually works good for beginners and increasing the working weights and strength . But with
              the time it stops being so much beneficial for muscle growth because it does not reach the failure.
            </div>
            <div class="jomhuria fw-bold text-dark fs-5">
              And also fact that bodybuilding is not aerobics , so human will not grow from adding more sets with a time
              or increasing training session time . Also , overtraining may lead to heart diseases , problems with CNS
              and insomnia .
            </div>
          </div>
          <div className="col-12 col-md-4 d-flex justify-content-center mt-4 mt-md-0">
            <img
              src={image_2}
              alt="Tall Narrow Image 2"
              className="img-fluid"
              style={{ maxWidth: "400px", height: "auto" }}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-4">
            <img src={image_3} alt="Wide Image" className="img-fluid" style={{ width: "100%", height: "300px" }} />
          </div>
          <div className="col-4">
            <img src={image_4} alt="Wide Image" className="img-fluid" style={{ width: "100%", height: "300px" }} />
          </div>
          <div className="col-4">
            <img src={image_5} alt="Wide Image" className="img-fluid" style={{ width: "100%", height: "300px" }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSuperHeroCore;
