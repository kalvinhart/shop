import {
  GetReturnType,
  IHttpService,
  GetOptions,
  PostOptions,
  PostReturnType,
} from "../interfaces/IHttpService";
import Axios, { AxiosResponse } from "axios";

export default class HttpService implements IHttpService {
  async get({ url }: GetOptions): GetReturnType {
    const data: AxiosResponse = await Axios.get(url);
    return data.data;
  }

  async post({ url, options }: PostOptions): PostReturnType {
    const data: AxiosResponse = await Axios.post(url, options);
    return data.data;
  }
}
