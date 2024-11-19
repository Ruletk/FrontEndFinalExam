import React from 'react';
import image_1 from '../assets/images/about/villain/1.png';
import image_2 from '../assets/images/about/villain/2.png';
import image_3 from '../assets/images/about/villain/3.png';
import image_4 from '../assets/images/about/villain/4.png';
import image_5 from '../assets/images/about/villain/5.png';

const AboutVillainsCore = () => {
  return (
    <section className="d-flex flex-column align-items-center text-bg-dark py-5 bg-black">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-start">
            <h1 className="jomhuria fw-bold text-white">Villain's core</h1>
          </div>
        </div>

        <div className="row mb-5 align-items-center">
          <div className="col-12 col-md-4 d-flex justify-content-center mb-4 mb-md-0">
            <img src={image_1} className="img-fluid" />
          </div>
          <div className="col-12 col-md-4 text-center jomhuria fs-5">
            <h1 className="mb-5">High intensity approach</h1>
            <p>Created by Arthur Jones, then modified and promoted by Mike Mentzer and his protégé Dorian Yates.</p>
            <p>
              This approach says that person should do necessary amount of sets and one working set till muscle
              failure, which means the point of being unable to lift the weight with the proper technique and by muscle
              group you are training.
            </p>
            <p>
              So basically, HIT says that person should train till failure and do not overtrain so muscles could recover
              till next training session.
            </p>
            <p>
              One of disadvantages of this approach is that difficult to increase the working weights, but the risk of
              overtraining that may lead to heart diseases, problems with CNS and insomnia is way lower.
            </p>
          </div>
          <div className="col-12 col-md-4 d-flex justify-content-center mt-4 mt-md-0">
            <img src={image_2} className="img-fluid" />
          </div>
        </div>

        <div className="row">
          <div className="col-4">
            <img src={image_3} className="img-fluid" style={{ width: '100%', height: '266px' }} />
          </div>
          <div className="col-4">
            <img src={image_4} className="img-fluid" style={{ width: '100%', height: '266px' }} />
          </div>
          <div className="col-4">
            <img src={image_5} className="img-fluid" style={{ width: '100%', height: '266px' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutVillainsCore;