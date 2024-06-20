export type TUser = {
  id?: string;
  firstName: string;
  lastName?: string;
  email: string;
  password: string;
  confirmPassword?: string;
};

export type TUserStore = {
  user: TUser;
  token: string;
};