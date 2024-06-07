import { apiSlice } from "@/lib/redux/Apislice";
import { Apis } from "./api-enum";

const OverviewApiFunction = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    overview: builder.query<unknown, void>({
      query: () => ({
        url: Apis.OVERVIEW,
        method: "GET",
      }),
    }),
  }),
});

export const { useOverviewQuery } = OverviewApiFunction;
