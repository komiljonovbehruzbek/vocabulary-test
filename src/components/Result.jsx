export default function Result({ score, total, restart }) {
    const pct = Math.round((score / total) * 100);

    return (
        <div className="result">
            <h2>Test Finished ✅</h2>

            <div className="score-badge" style={{ "--pct": `${pct}%` }}>
                <span>{score}/{total}</span>
            </div>

            <p className="center muted">Accuracy: {pct}%</p>
            <button onClick={restart}>Try Again</button>
        </div>
    );
}
