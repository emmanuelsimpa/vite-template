import {apiSlice} from '@/lib/redux/apislice';
import {apis} from './_apis-emum';
import {TLoginReq, TLoginRes} from '@/common/types/auth';

const AuthApiFunction = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<TLoginRes, TLoginReq>({
      query: credentials => ({
        url: apis.LOGIN,
        method: 'POST',
        body: {...credentials},
      }),
    }),
  }),
});

export const {useLoginMutation} = AuthApiFunction;
