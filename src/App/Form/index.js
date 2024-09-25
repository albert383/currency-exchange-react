import React, { useState } from "react";
import currencies from "./currencies";
import Result from "./Result";
import { SmallParagraph } from "./Paragraph/styled";
import Clock from "./Clock/clock";
import { FormWrapper, Fieldset, Legend, Label, InputField, ListItem, Button } from "./styled";

const Form = () => {
    const [amount, setAmount] = useState(100);
    const [currency, setCurrency] = useState("EUR");
    const [result, setResult] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        const selectedCurrency = currencies.find((cur) => cur.code === currency);
        const calculatedValue = (amount * selectedCurrency.rate).toFixed(2);
        setResult(`Otrzymasz ${calculatedValue} ${currency}`);
    };

    return (
        <FormWrapper onSubmit={onSubmit}>
            <Clock />
            <Fieldset>
                <Legend>KANTOR</Legend>
                <p>
                    <Label>
                        *Kwota w (PLN):
                        <InputField
                            type="number"
                            min="1"
                            step="any"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </Label>
                </p>
                <p>Wybierz walutę wymiany:</p>
                <ul>
                    {currencies.map((currencyOption) => (
                        <ListItem key={currencyOption.code}>
                            <Label>
                                {currencyOption.code}
                                <input
                                    type="radio"
                                    value={currencyOption.code}
                                    name="currency"
                                    checked={currency === currencyOption.code}
                                    onChange={(e) => setCurrency(e.target.value)}
                                />
                            </Label>
                        </ListItem>
                    ))}
                </ul>
                <Button type="submit">Oblicz</Button>
                <Result result={result} />
                <SmallParagraph>* Pola oznaczone gwiazdką są wymagane</SmallParagraph>
            </Fieldset>
        </FormWrapper>
    );
};

export default Form;
