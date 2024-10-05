import useCurrencyRates from "./useCurrencyRates";
import Select from "./Select";
import Result from "./Result";
import { SmallParagraph } from "./Paragraph/styled";
import Clock from "./Clock/clock";
import { FormWrapper, Fieldset, Legend, Label, InputField, Button } from "./styled";

const Form = () => {
    const {
        amount,
        setAmount,
        currency,
        setCurrency,
        result,
        calculateResult,
        ratesData,
        fakeLoading,
    } = useCurrencyRates();

    const { rates, loading, error, date } = ratesData;

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult();
    };

    return (
        <FormWrapper onSubmit={onSubmit}>
            <Clock />
            <Fieldset>
                <Legend>KANTOR</Legend>
                {fakeLoading || loading ? (
                    <p>Ładuję kursy walut z Europejskiego Banku Centralnego... :D</p>
                ) : error ? (
                    <p style={{ color: "red" }}>
                        Hmm… Coś poszło nie tak, sprawdź czy masz połączenie z internetem. Jeśli masz... to wygląda na to, że to nasza wina. Spróbuj później!
                    </p>
                ) : rates && Object.keys(rates).length > 0 ? (
                    <>
                        <p>
                            <Label htmlFor="amount">
                                *Kwota w (PLN):
                                <InputField
                                    type="number"
                                    min="1"
                                    step="any"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    id="amount"
                                    name="amount"
                                />
                            </Label>
                        </p>
                        <p>Wybierz walutę wymiany:</p>
                        <Label htmlFor="currency">
                            Waluta:
                            <Select
                                value={currency}
                                onChange={(e) => setCurrency(e.target.value)}
                                options={Object.keys(rates)}
                                id="currency"
                                name="currency"
                            />
                        </Label>
                        <Button type="submit">Oblicz</Button>
                        <Result result={result} />
                        <SmallParagraph>
                            Kursy walut pobierane są z Europejskiego Banku Centralnego.<br />
                            Aktualne na dzień: <strong>{date ? new Date(date).toLocaleDateString() : "Brak danych"}</strong>
                        </SmallParagraph>
                    </>
                ) : (
                    <p>Nie udało się załadować kursów walut.</p>
                )}
            </Fieldset>
        </FormWrapper>
    );
};

export default Form;
