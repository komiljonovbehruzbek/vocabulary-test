import { useState } from "react";

export default function Setup({ startQuiz }) {
    const [level, setLevel] = useState("A1");
    const [count, setCount] = useState(5);

    const handleSubmit = (e) => {
        e.preventDefault();
        startQuiz(level, count);
    };

    return (
        <div className="setup">
            <h2>Vocabulary Test</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Level:
                    <select value={level} onChange={(e) => setLevel(e.target.value)}>
                        <option value="A1">A1</option>
                        <option value="A2">A2</option>
                    </select>
                </label>

                <label>
                    Number of words:
                    <input
                        type="number"
                        min="5"
                        max="15"
                        value={count}
                        onChange={(e) => setCount(e.target.value)}
                    />
                </label>

                <button type="submit">Start</button>
            </form>
        </div>
    );
}
