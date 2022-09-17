import axios from "axios";

export const sendContactData = (data) => {
  return axios({
    url: "/api/contact",
    method: 'POST',
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    data: JSON.stringify(data)
  });
};
