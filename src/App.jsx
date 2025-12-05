import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Setup from "./components/Setup";
import Quiz from "./components/Quiz";
import GrammarQuiz from "./components/GrammarQuiz";
import ReadingQuiz from "./components/ReadingQuiz";
import Result from "./components/Result";
import words from "./data/words";
import grammar from "./data/grammar";
import reading from "./data/reading";
import About from "./pages/About";
import Tenses from "./pages/Tenses";

function App() {
  const [stage, setStage] = useState("setup");
  const [quizType, setQuizType] = useState("vocabulary");
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);

  const startQuiz = (type, level, count, unit = "") => {
    setQuizType(type);
    let selectedQuestions = [];
    if (type === "vocabulary") {
      if (level === "A2" && unit && words[level][unit]) {
        selectedQuestions = [...words[level][unit]].sort(() => Math.random() - 0.5).slice(0, count);
      } else if (level === "A2") {
        selectedQuestions = [...Object.values(words[level]).flat()].sort(() => Math.random() - 0.5).slice(0, count);
      } else {
        selectedQuestions = [...words[level]].sort(() => Math.random() - 0.5).slice(0, count);
      }
    } else if (type === "grammar") {
      selectedQuestions = [...grammar[level]].sort(() => Math.random() - 0.5).slice(0, count);
    } else if (type === "reading") {
      selectedQuestions = [...reading[level]].sort(() => Math.random() - 0.5).slice(0, count);
    }
    setQuestions({ level, count, unit, data: selectedQuestions });
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
    setQuizType("vocabulary");
  };

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tenses" element={<Tenses />} />
        <Route path="/test" element={
          <div className="app">
            {stage === "setup" && <Setup startQuiz={startQuiz} />}
            {stage === "quiz" && quizType === "vocabulary" && (
              <Quiz questions={questions.data} level={questions.level} count={questions.count} finishQuiz={finishQuiz} />
            )}
            {stage === "quiz" && quizType === "grammar" && (
              <GrammarQuiz level={questions.level} count={questions.count} finishQuiz={finishQuiz} />
            )}
            {stage === "quiz" && quizType === "reading" && (
              <ReadingQuiz level={questions.level} count={questions.count} finishQuiz={finishQuiz} />
            )}
            {stage === "result" && (
              <Result score={score} total={questions.count || questions.data?.length} restart={restart} />
            )}
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
