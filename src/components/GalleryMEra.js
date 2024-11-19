import React from "react";
import "../styles/Gallery.css";
import image_1 from "../assets/images/gallery/mass-era/1.png";
import image_2 from "../assets/images/gallery/mass-era/2.png";
import image_3 from "../assets/images/gallery/mass-era/3.png";
import image_4 from "../assets/images/gallery/mass-era/4.png";
import image_5 from "../assets/images/gallery/mass-era/5.png";
import image_6 from "../assets/images/gallery/mass-era/6.png";
import image_7 from "../assets/images/gallery/mass-era/7.png";
import image_8 from "../assets/images/gallery/mass-era/8.png";
import image_9 from "../assets/images/gallery/mass-era/9.png";
import image_10 from "../assets/images/gallery/mass-era/10.png";

const images = [image_1, image_2, image_3, image_4, image_5, image_6, image_7, image_8, image_9, image_10];

const GalleryMEra = () => {
  return (
    <section className="d-flex justify-content-center bg-black">
      <div
        id="golden-era-carousel"
        className="carousel slide mb-6 pointer-event"
        data-bs-ride="carousel"
        style={{ width: "60%" }}
      >
        <h1 className="jomhuria fw-bold text-white text-center">Mass Era</h1>
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#golden-era-carousel"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <img src={image} className="d-block w-100" alt={`Image ${index + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#golden-era-carousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#golden-era-carousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default GalleryMEra;
