import axios from "axios";

const axisosClient = axios.create({
  baseURL: 'https://mocki.io/v1/ff3207e0-f250-4a1d-9240-b3dbffa8386a' /*'https://619468539b1e780017ca1f54.mockapi.io'*/,
  headers: {
    'Content-Type': 'application/json',
  },
})


axisosClient.interceptors.response.use(async (response) => {
  if (response && response.data) {
    return response.data;
  }
  return response;
}
)
export default axisosClient;

//https://www.bezkoder.com/redux-refresh-token-axios/