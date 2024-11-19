import React from 'react';
import matrixImage from '../assets/images/matrix_2_pills.png';
import volumeImage from '../assets/images/volume.png';
import confrontationImage from '../assets/images/confrontation.png';
import highIntensityImage from '../assets/images/high_intensity.png';

const AboutApproaches = () => {
  return (
    <section className="d-flex flex-column align-items-center text-center text-bg-dark py-5 bg-black">
      <div className="container">
        <h1 className="jomhuria fw-bold text-white mb-5">About training approaches</h1>

        <img
          src={matrixImage}
          alt="Matrix, 2 pills to choice"
          className="img-fluid mb-5"
          style={{ maxHeight: '300px', width: '100%', height: 'auto' }}
        />

        <div className="row">
          <div className="col-12 col-md-4 mb-4">
            <h2 className="jomhuria fw-bold text-white">Volume</h2>
            <img src={volumeImage} alt="image 1" className="img-fluid" />
          </div>
          <div className="col-12 col-md-4 mb-4 d-flex flex-column align-bottom">
            <h2 className="jomhuria fw-bold text-white">Confrontation</h2>
            <img src={confrontationImage} alt="image 2" className="img-fluid" style={{ width: '120%' }} />
          </div>
          <div className="col-12 col-md-4 mb-4">
            <h2 className="jomhuria fw-bold text-white">High intensity</h2>
            <img src={highIntensityImage} alt="image 3" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutApproaches;