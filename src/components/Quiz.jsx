import { useState, useRef, useEffect } from "react";

export default function Quiz({ questions, finishQuiz }) {
    const [step, setStep] = useState(0);
    const [answer, setAnswer] = useState("");
    const [score, setScore] = useState(0);
    const [feedback, setFeedback] = useState(null); // {type: 'ok'|'error', text: string}
    const [locked, setLocked] = useState(false);    // submitdan keyin 1 soniya blok

    const inputRef = useRef(null);
    useEffect(() => { inputRef.current?.focus(); }, [step]);

    const current = questions[step];
    const percent = Math.round(((step) / questions.length) * 100);

    const normalize = (s) =>
        s.trim()
            .toLowerCase()
            .normalize?.("NFD")
            .replace(/\p{Diacritic}/gu, "")  // diakritiklarni olib tashlaydi (brauzering qo‘llasa)
            .replace(/['’`]/g, "");          // apostrof variantlarini olib tashlash

    const handleSubmit = (e) => {
        e.preventDefault();
        if (locked) return;

        const correct = normalize(answer) === normalize(current.en);
        if (correct) setScore((s) => s + 1);

        // Feedback ko‘rsatish (1s), so‘ngra keyingi savolga
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
            <h3>Word {step + 1} of {questions.length}</h3>
            <div className="progress"><div className="progress__bar" style={{ width: `${percent}%` }} /></div>

            <p><b>{current.uz}</b></p>
            <form onSubmit={handleSubmit}>
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Type in English..."
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    required
                    aria-label="Write the English translation"
                />
                <button type="submit" disabled={!answer.trim() || locked}>
                    {locked ? "..." : "Next"}
                </button>
            </form>

            <div className={`feedback ${feedback?.type || ""}`} aria-live="polite">
                {feedback?.text || ""}
            </div>
            <p className="muted center">Enter tugmasini bosib yuborishingiz ham mumkin.</p>
        </div>
    );
}
