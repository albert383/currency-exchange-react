import axios from 'axios';

const API_URL = "https://api.currencyapi.com/v3/latest?apikey=cur_live_qD7fWZYePxQmvJEwRFHzPBXvedeCD2QQLS7KrnAT&currencies=EUR%2CUSD%2CCAD%2CGBP%2CCHF&base_currency=PLN";

export const fetchCurrencyRates = async () => {
    try {
        const { data: { data: rates, meta: { last_updated_at: date } } } = await axios.get(API_URL);
        return { rates, date, error: null };
    } catch (error) {
        console.error("Błąd pobierania kursów walut:", error);
        return { rates: null, date: null, error: error.message || "Błąd pobierania danych" };
    }
};
