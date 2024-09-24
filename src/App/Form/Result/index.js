import React from "react";
import { Paragraph } from "./styled";

const Result = ({ result }) => (
    <Paragraph>
        Otrzymasz: <strong>{result || "N/A"}</strong>
    </Paragraph>
);

export default Result;