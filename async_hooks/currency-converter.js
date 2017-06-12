// USS CAD 23
// 23 USD is worth 28 CAD.

const axios = require('axios');

const getExchangeRate = (from, to) => {

    return axios.get(`http://api.fixer.io/latest?base=${from}`)
        .then((response) => {
            return response.data.rates[to];
        })
        .catch((e) => e);
};

const getCountries = (currencyCode) => {
    return axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`)
        .then((response) => {
            return response.data.map((country) => {
                return country.name;
            });
        })
        .catch((e) => e);
};

const convertCurrency = (from, to, amount) => {
    let countries;
    return getCountries(to).then((tempCountries) =>{
        countries = tempCountries;
        return getExchangeRate(from, to);
    }).then((rate) => {
        const exchangedAmount = amount * rate;

        return `${amount} ${from} is worth ${exchangedAmount} ${to}.
        ${to} can be used in the following countries: ${countries.join(',')}`;
    });
};

const convertCurrencyAlt = async (from, to, amount) => {
    const countries = await getCountries(to);
    const rate = await getExchangeRate(from, to);
    const exchangedAmount = amount * rate;
    return `${amount} ${from} is worth ${exchangedAmount} ${to}.
        ${to} can be used in the following countries: ${countries.join(',')}`;
};

convertCurrencyAlt('CAD', 'USD', 20).then((response) => {
    console.log(response);
}).catch((e) => {
    console.log(e);
});

// convertCurrency('CAD', 'USD', 20).then((response) => {
//     console.log(response);
// }).catch((e) => console.log(e));

// getCountries('USD').then((countries) => {
//     console.log(countries)
// });

// getExchangeRate('USD', 'CAD').then((rate) => console.log(rate));
