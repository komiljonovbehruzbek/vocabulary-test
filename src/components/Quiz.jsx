import { useState, useRef, useEffect } from "react";
import words from "../data/words";

export default function Quiz({ questions, level, count, finishQuiz }) {
    const [step, setStep] = useState(0);
    const [answer, setAnswer] = useState("");
    const [score, setScore] = useState(0);
    const [feedback, setFeedback] = useState(null);
    const [locked, setLocked] = useState(false);

    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current?.focus();
    }, [step]);

    const current = questions[step];
    const percent = Math.round((step / count) * 100);

    const normalize = (s) =>
        s
            .trim()
            .toLowerCase()
            .normalize?.("NFD")
            .replace(/\p{Diacritic}/gu, "")
            .replace(/['’`]/g, "");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (locked) return;

        const correct = normalize(answer) === normalize(current.en);
        if (correct) setScore((s) => s + 1);

        setLocked(true);
        setFeedback(
            correct
                ? { type: "ok", text: "To‘g‘ri! 👏" }
                : { type: "error", text: `Xato. To‘g‘ri javob: ${current.en}` }
        );

        setTimeout(() => {
            setFeedback(null);
            setLocked(false);
            setAnswer("");
            if (step + 1 < count) {
                setStep(step + 1);
            } else {
                const finalScore = correct ? score + 1 : score;
                finishQuiz(finalScore);
            }
        }, 1000);
    };

    return (
        <div className="quiz">
            <h3>So‘z {step + 1} / {count}</h3>
            <div className="progress">
                <div className="progress__bar" style={{ width: `${percent}%` }} />
            </div>
            <p>
                <b>{current.uz}</b>
            </p>
            <form onSubmit={handleSubmit}>
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Ingliz tilida yozing..."
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    required
                    aria-label="Ingliz tilida tarjimani yozing"
                />
                <button type="submit" disabled={!answer.trim() || locked}>
                    {locked ? "..." : "Keyingi"}
                </button>
            </form>
            <div className={`feedback ${feedback?.type || ""}`} aria-live="polite">
                {feedback?.text || ""}
            </div>
            <p className="muted center">Enter tugmasini bosib yuborishingiz ham mumkin.</p>
        </div>
    );
}
