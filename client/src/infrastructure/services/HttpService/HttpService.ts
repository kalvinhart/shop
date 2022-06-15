import { IHttpService, GetOptions, PostOptions } from "../interfaces/IHttpService";
import Axios, { AxiosResponse } from "axios";
export default class HttpService implements IHttpService {
  async get<T>({ url }: GetOptions): Promise<T> {
    const response: AxiosResponse = await Axios.get(url);
    return response.data;
  }

  async post<T>({ url, data, options = {} }: PostOptions): Promise<T> {
    const reponse: AxiosResponse = await Axios.post(url, data, options);
    return reponse.data;
  }
}
