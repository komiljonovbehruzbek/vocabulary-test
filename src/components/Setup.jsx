import { useState } from "react";

export default function Setup({ startQuiz }) {
    const [quizType, setQuizType] = useState("vocabulary");
    const [level, setLevel] = useState("A1");
    const [count, setCount] = useState(5);

    const handleSubmit = (e) => {
        e.preventDefault();
        startQuiz(quizType, level, count);
    };

    return (
        <div className="setup">
            <h2 className="setup-title">Testni Tanlang</h2>
            <form onSubmit={handleSubmit} className="setup-form">
                <div className="form-group">
                    <label className="form-label">Test turi:</label>
                    <select
                        value={quizType}
                        onChange={(e) => setQuizType(e.target.value)}
                        className="form-select"
                    >
                        <option value="vocabulary">Vocabulary</option>
                        <option value="grammar">Grammar</option>
                        <option value="reading">Reading</option>
                    </select>
                </div>

                <div className="form-group">
                    <label className="form-label">Daraja:</label>
                    <select
                        value={level}
                        onChange={(e) => setLevel(e.target.value)}
                        className="form-select"
                    >
                        <option value="A1">A1+</option>
                        <option value="A2">A2</option>
                    </select>
                </div>

                <div className="form-group">
                    <label className="form-label">Savollar soni:</label>
                    <input
                        type="number"
                        min="5"
                        max="15"
                        value={count}
                        onChange={(e) => setCount(e.target.value)}
                        className="form-input"
                    />
                </div>

                <button type="submit" className="submit-btn">
                    Boshlash
                </button>
            </form>
        </div>
    );
}
