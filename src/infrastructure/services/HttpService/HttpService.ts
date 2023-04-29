import {
  IHttpService,
  GetOptions,
  PostOptions,
} from "../interfaces/IHttpService";
import Axios, { AxiosResponse } from "axios";
export default class HttpService implements IHttpService {
  apiRoot = "http://localhost:4200";

  async get<T>({ url }: GetOptions): Promise<T> {
    const response: AxiosResponse = await Axios.get(`${this.apiRoot}${url}`);
    return response.data;
  }

  async post<T>({ url, data, options = {} }: PostOptions): Promise<T> {
    const reponse: AxiosResponse = await Axios.post(
      `${this.apiRoot}${url}`,
      data,
      options
    );
    return reponse.data;
  }
}
