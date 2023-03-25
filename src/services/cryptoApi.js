import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '1826207d5emshddc1d9adbb77a30p1b471fjsnce00870209e9',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
};



const baseUrl = 'https://coinranking1.p.rapidapi.com';

// coins
// url: 'https://coinranking1.p.rapidapi.com/coins',

// specific coin
// url: 'https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd',

// coin history
// https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/history


const createRequest = (url) => ({ url, headers: cryptoApiHeaders});

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest('/coins?limit=' + count)
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest('/coin/' + coinId)
        }),
        getCryptoHistory: builder.query({
            query: ({ coinId, timePeriod }) => createRequest('/coin/' + coinId + '/history/?timePeriod=' + timePeriod)
        })
    })
});


export const { useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } = cryptoApi;

