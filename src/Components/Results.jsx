import { useNavigate } from "react-router-dom";

const Results = ({ score, setScore }) => {
  const navigate = useNavigate();
  const handleReset = () => {
    setScore(0);
    navigate("/");
  };
  return (
    <div className="flex items-center justify-center flex-col w-full gap-5 h-full bg-blue-300">
      <h1> Total no of Questions : 5 </h1>
      <p className="text-3xl"> Score :{score} </p>
      <button
        className="bg-green-500 p-5 text-white rounded-full m-4 w-[150px] h-[60px] items-center hover:bg-red-600 "
        onClick={() => handleReset()}
      >
        {" "}
        Play Again{" "}
      </button>
    </div>
  );
};

export default Results;
