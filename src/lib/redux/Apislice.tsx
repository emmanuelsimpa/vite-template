import {
  FetchArgs,
  fetchBaseQuery,
  createApi,
  BaseQueryApi,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from "@reduxjs/toolkit/query/react";
import { store } from "./Store";
import { EnvData } from "@/common/config";
import { QueryReturnValue } from "node_modules/@reduxjs/toolkit/dist/query/baseQueryTypes";
import { logOut, setUser } from "@/features/auth/Slice";
import { handleError } from "@/utils/handle-error";

interface ExtraOptions {
  signal?: AbortSignal;
}

const baseQuery = fetchBaseQuery({
  baseUrl: EnvData.API_BASE_URL,
  credentials: "same-origin",
});

const baseQueryWithHeaders = async (
  args: FetchArgs,
  api: BaseQueryApi,
  extraOptions: ExtraOptions,
): Promise<
  QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>
> => {
  const { accessToken, refreshToken } = store.getState().auth;

  let result = await baseQuery(
    {
      ...args,
      headers: {
        ...args.headers,
        Authorization: `Bearer ${accessToken}`,
      },
    },
    api,
    extraOptions,
  );

  if ([401, 520].includes(result.error?.status as number)) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const refreshResult: any = await baseQuery(
      {
        url: "auth/refresh-token",
        method: "POST",
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      },
      api,
      extraOptions,
    );

    if (refreshResult.data) {
      const refreshToken = refreshResult.data;

      api.dispatch(setUser({ data: refreshToken.data }));
      result = await baseQuery(
        {
          ...args,
          headers: {
            ...args.headers,
            Authorization: `Bearer ${refreshToken?.data?.accessToken}`,
          },
        },
        api,
        extraOptions,
      );
    } else {
      api.dispatch(logOut());
    }
  } else if (result.error) {
    handleError(result?.error);
  }
  return result;
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithHeaders,
  endpoints: () => ({}),
  refetchOnReconnect: true,
  refetchOnFocus: true,
  keepUnusedDataFor: 5,
});
