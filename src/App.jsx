import { useState } from "react";
import Setup from "./components/Setup";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import words from "./data/words";

function App() {
  const [stage, setStage] = useState("setup");
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);

  const startQuiz = (level, count) => {
    const selected = [...words[level]].sort(() => Math.random() - 0.5).slice(0, count);
    setQuestions(selected);
    setStage("quiz");
  };

  const finishQuiz = (finalScore) => {
    setScore(finalScore);
    setStage("result");
  };

  const restart = () => {
    setStage("setup");
    setQuestions([]);
    setScore(0);
  };

  return (
    <div className="app">
      {stage === "setup" && <Setup startQuiz={startQuiz} />}
      {stage === "quiz" && <Quiz questions={questions} finishQuiz={finishQuiz} />}
      {stage === "result" && <Result score={score} total={questions.length} restart={restart} />}
    </div>
  );
}

export default App;
