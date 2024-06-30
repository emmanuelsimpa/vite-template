export type TLoginReq = {
  email: string;
  password: string;
};

export type TLoginRes = {
  code: number;
  data: {
    jwt: {
      accessToken: string;
      refreshToken: string;
    };
    user: {id: string};
  };
  status: true;
};
