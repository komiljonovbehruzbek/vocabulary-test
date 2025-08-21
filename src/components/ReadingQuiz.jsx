import { useState, useEffect, useRef } from "react";
import reading from "../data/reading";

export default function ReadingQuiz({ level, count, finishQuiz }) {
    const [step, setStep] = useState(0);
    const [selectedOption, setSelectedOption] = useState("");
    const [score, setScore] = useState(0);
    const [feedback, setFeedback] = useState(null);
    const [locked, setLocked] = useState(false);

    const questions = [...reading[level]].sort(() => Math.random() - 0.5).slice(0, count);
    const current = questions[step];
    const percent = Math.round((step / questions.length) * 100);

    const handleOptionSelect = (option) => {
        if (locked) return;
        setSelectedOption(option);
        const correct = option === current.correct;
        if (correct) setScore((s) => s + 1);

        setLocked(true);
        setFeedback(
            correct
                ? { type: "ok", text: "To‘g‘ri! 👏" }
                : { type: "error", text: `Xato. To‘g‘ri javob: ${current.correct}` }
        );

        setTimeout(() => {
            setFeedback(null);
            setLocked(false);
            setSelectedOption("");
            if (step + 1 < questions.length) {
                setStep(step + 1);
            } else {
                const finalScore = correct ? score + 1 : score;
                finishQuiz(finalScore);
            }
        }, 1000);
    };

    return (
        <div className="quiz">
            <h3>Savol {step + 1} / {questions.length}</h3>
            <div className="progress">
                <div className="progress__bar" style={{ width: `${percent}%` }} />
            </div>
            <p className="passage">{current.passage}</p>
            <p className="text-lg font-medium text-gray-800 mb-4"><b>{current.question}</b></p>
            <div className="quiz-buttons">
                {current.options.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => handleOptionSelect(option)}
                        className={
                            selectedOption === option
                                ? option === current.correct
                                    ? "correct"
                                    : "incorrect"
                                : ""
                        }
                        disabled={locked}
                    >
                        {option}
                    </button>
                ))}
            </div>
            <div className={`feedback ${feedback?.type || ""}`} aria-live="polite">
                {feedback?.text || ""}
            </div>
        </div>
    );
}
