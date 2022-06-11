import { IHttpService, GetOptions, PostOptions } from "../interfaces/IHttpService";
import Axios, { AxiosResponse } from "axios";

export default class HttpService implements IHttpService {
  async get<T>({ url }: GetOptions): Promise<T> {
    const data: AxiosResponse = await Axios.get(url);
    return data.data;
  }

  async post<T>({ url, options }: PostOptions): Promise<T> {
    const data: AxiosResponse = await Axios.post(url, options);
    return data.data;
  }
}
