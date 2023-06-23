export interface IHome{
  usersInitial: IUserRandom[];
  resultInitial: number;
}

export interface IUserRandom {
  name: {
    title: string;
    first: string;
    last: string;
  };
  login: {
    username: string;
  };
  email: string;
  phone: string;
  cell: string;
  location: {
    city: string;
    country: string;
  };
  picture: {
    medium: string;
  };
}

export interface IListUsers{
  result: number;
  setLoading: (loading: boolean) => void;
  setUsers: (users: IUserRandom[]) => void;
}
