import {
  GetReturnType,
  IHttpService,
  Options,
  PostReturnType,
} from "../interfaces/IHttpService";
import Axios, { AxiosResponse } from "axios";

export default class HttpService implements IHttpService {
  async get(url: string): GetReturnType {
    const data: AxiosResponse = await Axios.get(url);
    return data.data;
  }

  async post(url: string, options: Options): PostReturnType {
    const data: AxiosResponse = await Axios.post(url, options);
    return data.data;
  }
}
