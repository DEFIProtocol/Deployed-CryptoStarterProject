// wss://stream.binance.us:9443/ws/btcusdt@kline_1h
// /ws/<streamname>@kline_1h
// secret key aghQ161NSDizaU9zuja054T9Kx3YnuOYmBiZbkj5nKq2vYghA72hVepNZEAKmkNh
// https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=USD&apikey=FPTQ0L9A8BVNO27D
//'X-MBX-APIKEY': 'EcwFEb0Z29ILq5xKNuFBiJJ6Rj5kHnAaHwTTRi3UwNlGI92Nz67ZIzryBtWMIBkt',
 // 'X-MBX-SECRETKEY': 'aghQ161NSDizaU9zuja054T9Kx3YnuOYmBiZbkj5nKq2vYghA72hVepNZEAKmkNh',
// Qwsogvtv82FCd razxDUgYGNAdQ zNZHO_Sjf
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '749cb16441msh27276ffc2efb167p15090ajsn8cf28aa64aae'
};
const createRequest = (url) => ({url, headers: cryptoApiHeaders});
const baseUrl = ('https://coinranking1.p.rapidapi.com')

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest( 
                `/coins?limit=${count}`)
            }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`)
        }),
        getCryptoHistory: builder.query({
            query: ({ coinId, timePeriod }) => createRequest(`coin/${coinId}/history?timePeriod=${timePeriod}`),
        })
        }),
    })


export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery,
} = cryptoApi;

