export type TServerTeam = {
  firstName: string;
  id: string;
  lastName: string;
  picture: string;
  title: string;
};

export type TTeamStore = {
  team: TServerTeam[];
  loading: boolean;
  error: null | string;
};

type TTeamItemLocation = {
  city: string;
  country: string;
  state: string;
  street: string;
  timezone: string;
};

export type TTeamItem = {
  dateOfBirth: string;
  email: string;
  firstName: string;
  gender: string;
  id: string;
  lastName: string;
  location: TTeamItemLocation;
  phone: string;
  picture: string;
  registerDate: string;
  title: string;
  updatedDate: string;
};


