import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:4000";

class yodlrApi {

  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${yodlrApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async getAllUsers() {
    let res = await this.request(`users`);
    return res;
  }

  static async register(data) {
    let res = await this.request("users", data, "post");
    return res;
  }
  
}

export default yodlrApi;