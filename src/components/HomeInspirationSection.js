import React from "react";
import levrone from "../assets/images/kevin_levrone.png";
import tyson from "../assets/images/mike_tyson.png";
import hardy from "../assets/images/tom_hardy.png";

const HomeInspirationSection = () => {
  const inspirations = [
    {
      imgSrc: levrone,
      title: "Kevin Levrone",
      description: [
        "Kevin Levrone . American bodybuilder and musician.",
        "One of the aesthetical and massive bodybuilders in history.",
        "Has inspiring life history because lost his parent at teen age.",
      ],
    },
    {
      imgSrc: tyson,
      title: "Mike Tyson",
      description: [
        "Mike Tyson. American boxer known for his crushing power.",
        "One the most famous athlete in human history.",
        "By the age of 13, he had been arrested 38 times.",
        "Was trained by Cus D'Amato since 14 y.o and became boxing World champion when he was 20 y.o.",
      ],
    },
    {
      imgSrc: hardy,
      title: "Tom Hardy",
      description: [
        "Tom Hardy. British actor mostly known for playing in films:",
        "Legend,Batman 3,Warrior and Bronson.",
        "Already at the age of 13, Tom was addicted to hallucinogens, and at 16 he was an alcoholic and addicted to crack. The apogee of addiction was in 2003 - then the actor was found on the street in his own vomit and blood.",
        "But then he was able to pull himself together and transformed himself for roles in films and made them iconic thanks to his charisma and form.",
      ],
    },
  ];

  return (
    <section className="d-flex h-100 text-center text-bg-dark mt-5 bg-black">
      <div className="row mb-2 mx-0">
        <div className="col-md-5 mb-5">
          <h1>Inspired by</h1>
        </div>
        {inspirations.map((inspiration, index) => (
          <div className="col-md-9 my-5 offset-md-2" key={index}>
            <div className="row g-0 overflow-hidden flex-md-row mb-4 h-md-250 position-relative">
              <div class="col-12 col-lg-4">
                <img width="600" src={inspiration.imgSrc} alt="logo" className="img-fluid" />
              </div>
              <div className="col-lg-6 py-4 d-flex flex-column position-static mt-5 mt-lg-0 mx-lg-5">
                {inspiration.description.map((desc, i) => (
                  <p className="mb-3 jomhuria fs-2" key={i}>
                    {desc}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeInspirationSection;
