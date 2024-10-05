import React from "react";
import { Paragraph } from "./styled";

export const calculateResult = (amount, selectedCurrency) => {
    if (!selectedCurrency) {
        return "Waluta nie jest dostępna.";
    }
    const calculatedValue = (amount * selectedCurrency.value).toFixed(2);
    return `Otrzymasz ${calculatedValue} ${selectedCurrency.code}`;
};


const Result = ({ result }) => (
    <Paragraph>
        Otrzymasz: <strong>{result || "N/A"}</strong>
    </Paragraph>
);

export default Result;
