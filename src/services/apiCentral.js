import axios from "axios";

const request = async function (options, isHeader = true) {
  let authHeader = null;
  if (isHeader) {
    const tokenData = await localStorage.getItem(import.meta.env.TOKENDATA);
    const { token } = JSON.parse(tokenData);
    authHeader = token;
  }

  const client = axios.create({
    baseURL: import.meta.env.BASE_URL,
    headers: { Authorization: `Bearer ${authHeader} ` }
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
