type UserOptions = {
  email: string;
  password: string;
};

export type ProductOptions = {
  categories: string;
  sortBy: string;
};

export type Options = UserOptions | ProductOptions;

export type GetOptions = {
  url: string;
};

export type PostOptions = {
  url: string;
  options: Options;
};

export interface IHttpService {
  get<T>({ url }: GetOptions): Promise<T>;
  post<T>({ url, options }: PostOptions): Promise<T>;
}