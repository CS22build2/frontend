import axios from "axios";

const axiosWithAuth = () => {
  const token = "c34ff577184cc81c5625fd2ec99d1cee0ccc3437";

  return axios.create({
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    },
    baseURL: "https://lambda-treasure-hunt.herokuapp.com/api/adv"
  });
};

export default axiosWithAuth;
