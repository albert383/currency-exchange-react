import { useState, useEffect } from "react";

const useCurrencyRates = (initialCurrency = "EUR", initialAmount = 100) => {
    const [amount, setAmount] = useState(initialAmount);
    const [currency, setCurrency] = useState(initialCurrency);
    const [result, setResult] = useState("");

    const [ratesData, setRatesData] = useState({
        rates: {},
        date: null,
        loading: true,
        error: null,
    });

    const [fakeLoading, setFakeLoading] = useState(true);

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await fetch(
                    "https://api.currencyapi.com/v3/latest?apikey=cur_live_qD7fWZYePxQmvJEwRFHzPBXvedeCD2QQLS7KrnAT&currencies=EUR%2CUSD%2CCAD%2CGBP%2CCHF&base_currency=PLN"
                );
                if (!response.ok) {
                    throw new Error(`Błąd HTTP: ${response.status}`);
                }

                const data = await response.json();

                setRatesData({
                    rates: data.data,
                    date: data.meta.last_updated_at,
                    loading: false,
                    error: null,
                });
            } catch (error) {
                setRatesData((prevData) => ({
                    ...prevData,
                    loading: false,
                    error: error.message,
                }));
            }
        };

        fetchRates();

        const timer = setTimeout(() => {
            setFakeLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const calculateResult = () => {
        const selectedCurrency = ratesData.rates[currency];
        if (!selectedCurrency) {
            setResult("Waluta nie jest dostępna.");
            return;
        }
        const calculatedValue = (amount * selectedCurrency.value).toFixed(2);
        setResult(`Otrzymasz ${calculatedValue} ${currency}`);
    };

    return {
        amount,
        setAmount,
        currency,
        setCurrency,
        result,
        calculateResult,
        ratesData,
        fakeLoading,
    };
};

export default useCurrencyRates;
