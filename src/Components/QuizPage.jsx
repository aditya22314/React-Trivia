import { useState } from "react";
import Questions from "./Questions";

import Results from "./Results";

const QuizPage = () => {
  // Adding Local Data
  const questions = [
    {
      question: "What is the capital of India?",
      questionNo: 1,
      options: ["Delhi", "Mumbai", "Chennai", "Kolkata"],
      correctOption: "Delhi",
    },
    {
      question: "What is the capital of France",
      questionNo: 2,
      options: ["Washington ", "Paris ", "FrankBurger", "Berlin"],
      correctOption: "Paris ",
    },
    {
      question: "What is the capital of Germany",
      questionNo: 3,
      options: ["Berlin", "FrankBurger", "Washington ", "Paris "],
      correctOption: "Berlin",
    },
    {
      question: "What is the capital of Spain",
      questionNo: 4,
      options: ["Berlin", "Madrid", "Washington ", "Paris "],
      correctOption: "Madrid ",
    },
    {
      question: "What is the capital of Russia",
      questionNo: 5,
      options: ["Berlin", "Moscow", "Washington ", "HongKong "],
      correctOption: "Moscow",
    },
  ];
  // ... Current Option select... CorrectAnswer.... Score

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [check, setCheck] = useState(false);
  const [score, setScore] = useState(0);

  const handleQuestionChange = () => {
    setSelectedOption(null);
    setCorrectAnswer(null);
    setCheck(false);

    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const onSelectOption = (option) => {
    setSelectedOption(option);
    setCorrectAnswer(questions[currentQuestionIndex].correctOption);
    setCheck(true);
    if (option === questions[currentQuestionIndex].correctOption) {
      setScore(score + 1);
    }
  };
  //   const [time, setTime] = useState(10);

  return (
    <div className="w-full h-full flex flex-col ">
      <h1 className="p-6">
        {" "}
        <p className="font-bold bg-green-50"> Live Score : {score} </p>{" "}
      </h1>

      {/* {currentQuestionIndex !== questions.length && <h1> Timer : </h1> && (
        <Timer />
      )} */}
      {currentQuestionIndex < questions.length ? (
        <Questions
          data={questions[currentQuestionIndex]}
          onSelectOption={onSelectOption}
          selectedOption={selectedOption}
          correctAnswer={correctAnswer}
          check={check}
        />
      ) : (
        <>
          <Results score={score} setScore={setScore} />
          {/* {navigate("/result")  } */}
        </>
      )}

      {currentQuestionIndex != questions.length && (
        <div className="flex justify-center">
          <button
            className="bg-blue-400 p-2 font-medium  rounded-lg w-[150px] h-[60px] items-center "
            onClick={handleQuestionChange}
          >
            {" "}
            {currentQuestionIndex < questions.length - 1
              ? "Next Question"
              : " See Results"}{" "}
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
