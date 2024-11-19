import React from "react";
import protein_1 from "../assets/images/regime/protein_1.png";
import protein_2 from "../assets/images/regime/protein_2.png";
import protein_3 from "../assets/images/regime/protein_3.png";
import protein_4 from "../assets/images/regime/protein_4.png";

const RegimeDiet = () => {
  return (
    <section class="d-flex flex-column align-items-center text-bg-dark py-5 bg-black">
      <div class="container">
        <div class="row mb-5">
          <div class="col-12 text-start">
            <h1 class="jomhuria fw-bold text-white">SuperHero's core</h1>
          </div>
        </div>

        <div class="row mb-5 align-items-center">
          <div class="col-12 col-md-3 mb-4">
            <img src={protein_1} alt="Image 1" class="img-fluid" />
          </div>
          <div class="col-12 col-md-3 mb-4">
            <img src={protein_2} alt="Image 2" class="img-fluid" />
          </div>
          <div class="col-12 col-md-6 jomhuria fw-bold text-white fs-4 lh-1">
            <p>
              Muscle Growth & Repair: Protein rebuilds muscles after workouts, while carbs fuel training and replenish
              energy. Fats support hormone production, including testosterone, which aids muscle growth.
            </p>
            <p>
              Energy & Performance: Carbs provide energy for intense workouts. A balanced diet ensures sustained energy
              and better performance during training.
            </p>
            <p>
              Fat Loss & Recovery: A calorie deficit helps burn fat while preserving muscle. Post-workout protein and
              carbs boost recovery and muscle repair.
            </p>
            <p>
              Hormonal Balance: Healthy fats regulate hormones like testosterone, while consistent meals stabilize
              insulin, preventing muscle breakdown.
            </p>
          </div>
        </div>

        <div class="row mb-5 align-items-center">
          <div class="col-12 col-md-6 jomhuria fw-bold text-white fs-4 lh-1">
            <p>Bulking (Gaining Muscle Mass)</p>
            <ul>
              <li>Calories: 10-20% surplus above maintenance.</li>
              <li>Example: If maintenance is 2,500 calories, aim for 2,750-3,000.</li>
              <li>Protein: 1.6-2.2 g/kg (0.7-1 g/lb) of body weight.</li>
              <li>Example: For an 80 kg person, aim for 128-176 grams.</li>
              <li>Carbs: 4-7 g/kg (1.8-3.2 g/lb).</li>
              <li>Example: For 80 kg, aim for 320-560 grams.</li>
              <li>Fats: 0.8-1 g/kg (0.36-0.45 g/lb).</li>
              <li>Example: For 80 kg, aim for 64-80 grams.</li>
            </ul>
            <p>Cutting (Losing Fat, Maintaining Muscle)</p>
            <ul>
              <li>Calories: 10-20% deficit below maintenance.</li>
              <li>Example: If maintenance is 2,500, aim for 2,000-2,250.</li>
              <li>Protein: 2.2 g/kg (1 g/lb).</li>
              <li>Example: For 80 kg, aim for 176 grams.</li>
              <li>Carbs: 2-4 g/kg (0.9-1.8 g/lb).</li>
              <li>Example: For 80 kg, aim for 160-320 grams.</li>
              <li>Fats: 0.8-1 g/kg (0.36-0.45 g/lb).</li>
              <li>Example: For 80 kg, aim for 64-80 grams.</li>
            </ul>
          </div>
          <div class="col-12 col-md-3 mb-4">
            <img src={protein_3} alt="Image 3" class="img-fluid" />
          </div>
          <div class="col-12 col-md-3 mb-4">
            <img src={protein_4} alt="Image 4" class="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegimeDiet;
