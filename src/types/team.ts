// export type TTeamList = {
//   data: TServerTeam[];
//   page: number;
//   per_page: number;
//   support: TSupport;
//   total: number;
//   total_pages: number;
// };

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
