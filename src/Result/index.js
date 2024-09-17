import "./style.css";

const Result = ({ result }) => (
    <p className="result_paragraph">
        Otrzymasz: <strong>{result || "N/A"}</strong>
    </p>
);

export default Result;