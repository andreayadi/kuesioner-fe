import axios from "axios";

const fetchApi = async ({ url, method, data }) => {
  const responseAxios = await axios({
    url,
    method,
    data,
  }).catch((err) => err.response);

  return responseAxios;
};

export default fetchApi;
