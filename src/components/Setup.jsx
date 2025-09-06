import React, { useState } from "react";

function Setup({ startQuiz }) {
    const [type, setType] = useState("vocabulary");
    const [level, setLevel] = useState("A1");
    const [count, setCount] = useState(5);
    const [unit, setUnit] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        startQuiz(type, level, count, level === "A2" ? unit : ""); // A2 uchun unitni o'tkazamiz
    };

    return (
        <div className="setup">
            <h2>Select the test</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Type:</label>
                    <select value={type} onChange={(e) => setType(e.target.value)}>
                        <option value="vocabulary">Vocabulary</option>
                        <option value="grammar">Grammar</option>
                        <option value="reading">Reading</option>
                    </select>
                </div>
                <div>
                    <label>Level:</label>
                    <select value={level} onChange={(e) => { setLevel(e.target.value); setUnit(""); }}>
                        <option value="A1">A1</option>
                        <option value="A2">A2</option>
                        <option value="B1">B1</option>
                    </select>
                </div>
                {/* Unit tanlash faqat vocabulary va A2 uchun chiqadi */}
                {type === "vocabulary" && level === "A2" && (
                    <div>
                        <label>Unit:</label>
                        <select value={unit} onChange={(e) => setUnit(e.target.value)}>
                            <option value="">Select Unit</option>
                            <option value="starter_unit">Starter Unit</option>
                            <option value="unit1">Unit 1</option>
                            <option value="unit2">Unit 2</option>
                            <option value="unit5">Unit 5</option>
                            <option value="unit6">Unit 6</option>
                            <option value="unit7">Unit 7</option>
                            <option value="unit8">Unit 8</option>
                            <option value="unit9">Unit 9</option>
                            <option value="unit10">Unit 10</option>
                        </select>
                    </div>
                )}
                <div>
                    <label>Number of Questions:</label>
                    <input
                        type="number"
                        value={count}
                        onChange={(e) => setCount(Math.max(1, e.target.value))}
                        min="1"
                        max="30"
                    />
                </div>
                <button className="start" type="submit">Start</button>
            </form>
        </div>
    );
}

export default Setup;
