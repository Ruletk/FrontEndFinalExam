import React from "react";
import sleepy_1 from "../assets/images/regime/sleepy_1.png";
import sleepy_2 from "../assets/images/regime/sleepy_2.png";
import sleepy_3 from "../assets/images/regime/sleepy_3.png";

const RegimeSleep = () => {
  return (
    <section class="d-flex flex-column align-items-center text-center text-bg-dark py-5 bg-white">
      <div class="container">
        <h1 class="jomhuria fw-bold text-dark mb-5">Regime and Diet</h1>
        <div class="row align-items-center">
          <div class="col-12 col-md-4 mb-4">
            <div class="row">
              <div class="col-12 mb-4">
                <img src={sleepy_1} alt="Image 1" class="img-fluid" />
              </div>
              <div class="col-12">
                <img src={sleepy_2} alt="Image 2" class="img-fluid" />
              </div>
            </div>
          </div>

          <div class="col-12 col-md-4 mb-4">
            <p class="jomhuria fw-bold text-dark fs-5">
              Sleep is vital for bodybuilding, as it supports muscle recovery, growth, and overall performance. Here’s
              why getting enough sleep is essential:
            </p>
            <ol class="jomhuria text-dark fw-bold fs-5">
              <li>
                Muscle Recovery & Growth: Sleep is when your body repairs muscle fibers and builds them stronger. Growth
                hormone is released during deep sleep, aiding muscle recovery and growth.
              </li>
              <li>
                Hormone Balance: Sleep regulates key hormones like testosterone (for muscle building) and cortisol (a
                stress hormone that can break down muscle). Adequate sleep keeps these hormones balanced, optimizing
                muscle growth.
              </li>
              <li>
                Energy & Performance: Sleep restores energy levels, replenishing glycogen stores that fuel muscles
                during workouts. Without enough sleep, energy drops, reducing strength and endurance.
              </li>
              <li>
                Preventing Overtraining & Fatigue: Lack of sleep increases the risk of overtraining and injury. Proper
                rest helps prevent burnout and keeps your nervous system in balance, improving recovery and performance.
              </li>
            </ol>
          </div>

          <div class="col-12 col-md-4 mb-4">
            <img src={sleepy_3} alt="Image 3" class="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegimeSleep;
