import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const googleBooksApi = createApi({
        reducerPath: 'results',
        baseQuery: fetchBaseQuery({ baseUrl: 'https://www.googleapis.com/books/v1/' }),
        endpoints: (builder) => ({
            searchVolume: builder.query({
            query: (query) => `volumes?q=${query}&key=${process.env.REACT_APP_GOOGLE_BOOKS_API_KEY}`,
        }),
    }),
});

export const { useLazySearchVolumeQuery } = googleBooksApi;
