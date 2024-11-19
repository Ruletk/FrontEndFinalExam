import React, { useState } from "react";
import "../styles/Quiz.css";

const questions = [
  {
    question:
      "Which bodybuilder is known for his aesthetic and massive physique, and had an inspiring life story after losing his parents as a teenager?",
    options: ["Arnold Schwarzenegger", "Kevin Levrone", "Ronnie Coleman", "Jay Cutler"],
    correctAnswer: "Kevin Levrone",
  },
  {
    question: "At what age did Mike Tyson become the youngest heavyweight boxing champion?",
    options: ["18", "20", "22", "25"],
    correctAnswer: "20",
  },
  {
    question:
      "Which actor struggled with addiction to hallucinogens, alcohol, and crack but later turned his life around and became famous for his roles in Warrior and Bronson?",
    options: ["Chris Hemsworth", "Leonardo DiCaprio", "Tom Hardy", "Matt Damon"],
    correctAnswer: "Tom Hardy",
  },
  {
    question: "Why is sleep considered vital for bodybuilding?",
    options: [
      "It improves digestion",
      "It helps with muscle recovery, growth, and performance",
      "It boosts metabolism",
      "It reduces hunger",
    ],
    correctAnswer: "It helps with muscle recovery, growth, and performance",
  },
  {
    question: "What hormone is primarily released during deep sleep and aids muscle recovery and growth?",
    options: ["Insulin", "Estrogen", "Growth hormone", "Cortisol"],
    correctAnswer: "Growth hormone",
  },
  {
    question: "Which macronutrient helps rebuild muscles after workouts?",
    options: ["Carbohydrates", "Protein", "Fats", "Fiber"],
    correctAnswer: "Protein",
  },
  {
    question: "What is the role of carbohydrates in bodybuilding?",
    options: [
      "Build muscle mass",
      "Fuel workouts and replenish muscle glycogen",
      "Regulate hormones",
      "Help with fat loss",
    ],
    correctAnswer: "Fuel workouts and replenish muscle glycogen",
  },
  {
    question: "How do fats contribute to bodybuilding?",
    options: [
      "They provide quick energy during workouts",
      "They support hormone production, including testosterone",
      "They prevent muscle soreness",
      "They increase the rate of fat loss",
    ],
    correctAnswer: "They support hormone production, including testosterone",
  },
  {
    question: "What is the main goal during a cutting phase in bodybuilding?",
    options: [
      "To gain muscle mass",
      "To burn fat while preserving muscle mass",
      "To increase endurance",
      "To improve strength",
    ],
    correctAnswer: "To burn fat while preserving muscle mass",
  },
  {
    question: "What is the typical calorie range for someone bulking (gaining muscle mass)?",
    options: [
      "A 5-10% surplus above maintenance calories",
      "A 10-20% surplus above maintenance calories",
      "A 5-10% deficit below maintenance calories",
      "A 20-30% deficit below maintenance calories",
    ],
    correctAnswer: "A 10-20% surplus above maintenance calories",
  },
  {
    question: "How much protein should someone consume during a bulking phase per kilogram of body weight?",
    options: ["0.8-1.2 grams", "1.2-1.6 grams", "1.6-2.2 grams", "2.5-3 grams"],
    correctAnswer: "1.6-2.2 grams",
  },
  {
    question: "What is the recommended carbohydrate intake for bulking per kilogram of body weight?",
    options: ["1-3 grams", "3-5 grams", "4-7 grams", "6-8 grams"],
    correctAnswer: "4-7 grams",
  },
  {
    question: "What is the primary principle behind High-Intensity Training (HIT)?",
    options: [
      "Training for long durations with multiple exercises",
      "Training to muscle failure with fewer sets, focusing on recovery",
      "Focusing on endurance rather than strength",
      "Doing low-intensity cardio for fat loss",
    ],
    correctAnswer: "Training to muscle failure with fewer sets, focusing on recovery",
  },
  {
    question: "What is a potential disadvantage of High-Intensity Training (HIT)?",
    options: [
      "It leads to excessive muscle growth",
      "It’s difficult to increase working weights over time",
      "It is too easy for beginners",
      "It focuses too much on hypertrophy",
    ],
    correctAnswer: "It’s difficult to increase working weights over time",
  },
  {
    question: "What is one of the risks of overtraining in bodybuilding?",
    options: [
      "Increased muscle size",
      "Improved athletic performance",
      "Heart disease, CNS problems, and insomnia",
      "Faster fat loss",
    ],
    correctAnswer: "Heart disease, CNS problems, and insomnia",
  },
];

const QuizComponent = () => {
    const [quizStarted, setQuizStarted] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [overlayActive, setOverlayActive] = useState(false);
    const [quizEnded, setQuizEnded] = useState(false);
    const startQuiz = () => {
      setOverlayActive(true);
      setTimeout(() => {
        setQuizStarted(true);
      }, 100);
    };
  
    const handleAnswer = (answer) => {
      if (answer === questions[currentQuestion].correctAnswer) {
        setScore(score + 1);
      }
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setQuizEnded(true);
        setQuizStarted(false);
        setOverlayActive(false);
      }
    };
  
    const resetQuiz = () => {
      setQuizEnded(false);
      setCurrentQuestion(0);
      setScore(0);
    };
  
    return (
      <div className="quiz-container position-relative bg-dark mt-0 vh-100 d-flex justify-content-center align-items-center">
        <div className="text-center d-flex flex-column" style={{ minHeight: '600px', width: '100%', maxWidth: '600px' }}>
          {quizStarted && (
            <div
              className="overlay position-fixed w-100 h-100"
              style={{
                top: 0,
                left: 0,
                zIndex: 1000,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                pointerEvents: 'none',
              }}
            ></div>
          )}
  
          {!quizStarted && !quizEnded && (
            <div className="text-center">
              <button className="btn btn-danger mt-5" style={{ zIndex: 1100 }} onClick={startQuiz}>
                Start Quiz
              </button>
            </div>
          )}
  
          {quizStarted && (
            <div
              className="quiz-content p-4 mt-5 mx-auto bg-white shadow rounded d-flex flex-column"
              style={{
                maxWidth: '500px',
                minHeight: '600px',
                zIndex: 1100,
                animation: 'fadeIn 0.5s ease-in-out',
                flex: '1',
              }}
            >
              <h2 className="mb-4">{questions[currentQuestion].question}</h2>
              <div className="mt-auto">
                {questions[currentQuestion].options.map((option, index) => (
                  <button key={index} className="btn btn-outline-secondary w-100 my-2" onClick={() => handleAnswer(option)}>
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}
  
          {quizEnded && (
            <div
              className="quiz-result p-4 mt-5 mx-auto bg-white shadow rounded d-flex flex-column w-100 justify-content-center"
              style={{
                minHeight: '600px',
                zIndex: 1100,
                animation: 'fadeIn 0.5s ease-in-out',
                flex: '1',
              }}
            >
              <h2 className="mb-4">Quiz has ended!</h2>
              <p className="mb-4">Your score is: {score}/{questions.length}</p>
              <button className="btn btn-primary" onClick={resetQuiz}>
                Restart Quiz
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

export default QuizComponent;
