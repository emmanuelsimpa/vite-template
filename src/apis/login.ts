import { apiSlice } from "@/lib/redux/Apislice";
import { Apis } from "./api-enum";

const LoginApiFunction = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    login: builder.mutation<unknown, any>({
      query: (credentials) => ({
        url: Apis.LOGIN,
        method: "POST",
        body: { ...credentials },
      }),
    }),
  }),
});

export const { useLoginMutation } = LoginApiFunction;
