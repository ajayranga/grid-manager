import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

const hostname = process.env.HOST_NAME ? process.env.HOST_NAME : 'http://localhost';
const port = process.env.PORT ? process.env.PORT : 5000;

export async function request(
    url: string,
    options?: AxiosRequestConfig,
): Promise<AxiosResponse | { err: AxiosError }> {
    const requestURL = `${hostname}:${port}${url}`;
    const { data } = await axios(requestURL, options);
    return data;
} 