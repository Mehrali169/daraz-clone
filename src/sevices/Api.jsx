import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com",
  }),

  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({
        url: "products",
        method: "GET",
      }),
    }),
  }),
});
export const { useGetAllProductsQuery } = postApi;
