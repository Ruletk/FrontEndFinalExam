import React from "react";
import welcomeImage from "../assets/images/welcome.png";

const HomeWelcomeSection = () => {
  return (
    <section className="d-flex h-100 text-center text-bg-black">
      <div className="bg-black cover-container d-flex w-100 h-100 mx-auto flex-column position-relative">
        <main className="h-100 position-relative">
          <img src={welcomeImage} alt="logo" className="img-fluid h-100" />
          <div className="position-absolute bottom-0 start-50 translate-middle-x text-white mb-3 pb-lg-4">
            <h1 className="jomhuria fw-bold">Welcome to my world</h1>
          </div>
        </main>
        <div className="text-white text-center mt-5">
          <h2 className="jomhuria fw-bold">Not for a weak guys</h2>
        </div>
      </div>
    </section>
  );
};

export default HomeWelcomeSection;
