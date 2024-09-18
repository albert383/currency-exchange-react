import React, { useState } from "react";
import "./style.css";
import currencies from "../currencies";
import Result from "../Result";
import Paragraph from "../Paragraph";

const Form = ({ setResult, result }) => {
    const [amount, setAmount] = useState(100);
    const [currency, setCurrency] = useState("EUR");

    const onSubmit = (event) => {
        event.preventDefault();
        const selectedCurrency = currencies.find((cur) => cur.code === currency);
        const calculatedValue = (amount * selectedCurrency.rate).toFixed(2);
        setResult(`Otrzymasz ${calculatedValue} ${currency}`);
    };

    return (
        <form onSubmit={onSubmit} className="form">
            <fieldset className="form__fieldset">
                <legend className="form__legend">KANTOR</legend>
                <p>
                    <label className="form__label">
                        *Kwota w (PLN):
                        <input
                            type="number"
                            min="1"
                            step="any"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="form__field"
                        />
                    </label>
                </p>
                <p>Wybierz walutę wymiany:</p>
                <ul>
                    {currencies.map((currencyOption) => (
                        <li key={currencyOption.code} className="form__li">
                            <label>
                                {currencyOption.code}
                                <input
                                    type="radio"
                                    value={currencyOption.code}
                                    name="currency"
                                    checked={currency === currencyOption.code}
                                    onChange={(e) => setCurrency(e.target.value)}
                                />
                            </label>
                        </li>
                    ))}
                </ul>
                <button className="button" type="submit">
                    Oblicz
                </button>
                <Result result={result} />
                <Paragraph title="* Pola oznaczone gwiazdką są wymagane" />
            </fieldset>
        </form>
    );
};

export default Form;
