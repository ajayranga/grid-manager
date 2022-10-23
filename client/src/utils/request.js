import axios from 'axios';

// const hostname = process.env.HOST_NAME
//   ? process.env.HOST_NAME
//   : 'http://localhost';
// const port = process.env.PORT ? process.env.PORT : 5000;

export async function request(url, options) {
  // const requestURL = `${hostname}:${port}${url}`;
  const { data } = await axios(url, options);
  return data;
}
