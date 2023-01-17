import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  tagTypes: ['Profile'],
  endpoints: (builder) => ({
    findProfile: builder.query({
      query: (id = "77cb4539-c850-43fe-900e-35dcff912393") => ({
        url: `profile/${id}`,
      }),
      providesTags: ['Profile']
    }),
  }),
});

export const { useFindProfileQuery } = profileApi;
