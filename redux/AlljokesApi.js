import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const baseUrl = process.env.NEXT_PUBLIC_API_URL;
export const AlljokesApi = createApi({

    reducerPath: "AlljokesApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getAllJokes: builder.query({
        query: () => ({
            url: `joke/Any?amount=${20}`,
            method: "GET",
        }),
        }),
    }),
});

export const { useGetAllJokesQuery } = AlljokesApi;
