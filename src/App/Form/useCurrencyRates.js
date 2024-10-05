import { useState, useEffect } from "react";
import { fetchCurrencyRates } from "./fetchCurrencyRates";
import { calculateResult } from "./Result";

const useCurrencyRates = (initialCurrency = "EUR", initialAmount = 100) => {
    const [amount, setAmount] = useState(initialAmount);
    const [currency, setCurrency] = useState(initialCurrency);
    const [result, setResult] = useState("");
    const [ratesData, setRatesData] = useState({ state: "loading" });
    const [fakeLoading, setFakeLoading] = useState(true);

    useEffect(() => {
        const getRates = async () => {
            const data = await fetchCurrencyRates();
            setRatesData({
                rates: data.rates,
                date: data.date,
                loading: false,
                error: data.error,
            });
        };

        getRates();

        const timer = setTimeout(() => {
            setFakeLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const onCalculateResult = () => {
        const selectedCurrency = ratesData.rates?.[currency];
        setResult(calculateResult(amount, selectedCurrency));
    };

    return {
        amount,
        setAmount,
        currency,
        setCurrency,
        result,
        calculateResult: onCalculateResult,
        ratesData,
        fakeLoading,
    };
};

export default useCurrencyRates;
