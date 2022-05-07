import axios from "axios";

const request = async function (options, isHeader = true) {
  let authHeader = null;
  if (isHeader) {
    const tokenData = import.meta.env.TOKEN_DATA;
    const { token } = JSON.parse(tokenData);
    authHeader = token;
  }

  const client = axios.create({
    baseURL: import.meta.env.API_URL,
    headers: { Authorization: `Basic ${authHeader} ` }
  });

  const onSuccess = function (response) {
    return response.data;
  };

  const onError = function (error) {
    return Promise.reject(error.response || error.message);
  };

  return client(options).then(onSuccess).catch(onError);
};

export default request;
