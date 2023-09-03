import fetchApi from "../config/FetchAxios";
const ROOT_API = process.env.REACT_APP_API_URL;

export const insertNewKuesionerData = async (data) => {
  const url = `${ROOT_API}/kuesioner`;

  const responseAxios = await fetchApi({
    url,
    method: "POST",
    data,
  });

  return responseAxios;
};

export const getSummaryData = async () => {
  const url = `${ROOT_API}/kuesioner/summary`;

  const responseAxios = await fetchApi({
    url,
    method: "GET",
  });

  return responseAxios;
};
