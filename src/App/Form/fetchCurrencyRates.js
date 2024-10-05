import axios from 'axios';

const API_URL = "https://api.currencyapi.com/v3/latest?apikey=cur_live_qD7fWZYePxQmvJEwRFHzPBXvedeCD2QQLS7KrnAT&currencies=EUR%2CUSD%2CCAD%2CGBP%2CCHF&base_currency=PLN";

export const fetchCurrencyRates = async () => {
    try {
        const { data } = await axios.get(API_URL);
        return [data.data, data.meta.last_updated_at];
    } catch (error) {
        return [null, null, error.message || "Błąd pobierania danych"];
    }
};
