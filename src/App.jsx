import "./App.css";
import HomePage from "./Components/HomePage";
import { Route, Routes } from "react-router-dom";
import QuizPage from "./Components/QuizPage";
import Results from "./Components/Results";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/result" element={<Results />} />
      </Routes>
    </>
  );
}

export default App;
