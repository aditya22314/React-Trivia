import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const onStart = () => {
    navigate("/quiz");
  };
  return (
    <div className="h-full w-full flex items-center justify-center flex-col gap-5 bg-slate-200">
      <h1 className=" text-4xl"> Trivia Quiz Game </h1>
      <button onClick={onStart} className="bg-green-500 p-3 rounded-full">
        {" "}
        Start Quiz{" "}
      </button>
    </div>
  );
};

export default HomePage;
