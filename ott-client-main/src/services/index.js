import Axios from "axios";
// import { apiConfig } from

class ApiRequestService {
  baseURL;
  axiosService;

  constructor(baseURL) {
    this.baseURL = baseURL;
    this.axiosService = Axios.create({
      baseURL: this.baseURL,
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
    });
  }

  unauthorizedCheck(response) {
    if (response && response.status == 401) {
      localStorage.clear();
      window.location.pathname = "/";
    }
  }

  getApi(path, headers = {}, params = {}) {
    return new Promise((resolve, reject) => {
      this.axiosService
        .get(path, {
          headers,
          params,
        })
        .then((res) => {
          console.log("GET API Response: ", res);
          resolve({
            message: res.data.message,
            status: true,
            data: res.data,
          });
        })
        .catch((error) => {
          console.log("GET API Error: ", error);
          // this.unauthorizedCheck(error?.response);
          reject({
            message: error?.response?.data?.message
              ? error?.response?.data?.message
              : error?.response?.data,
            status: false,
          });
        })
        .then(() => {
          // here the code which should be excuted always
        });
    });
  }

  postApi(path, headers = {}, apiData) {
    return new Promise((resolve, reject) => {
      this.axiosService
        .post(path, apiData, {
          headers,
        })
        .then((res) => {
          console.log("POST API Response: ", res);
          resolve({
            message: res.data.message,
            status: true,
            data: res.data,
          });
        })
        .catch((error) => {
          console.log("POST API Error: ", error);

          // this.unauthorizedCheck(error?.response);
          reject({
            message: error?.response?.data?.message
              ? error?.response?.data?.message
              : error?.response?.data,
            status: false,
          });
        })
        .then(() => {
          // here the code which should be excuted always
        });
    });
  }

  deleteApi(path, headers = {}, apiData = {}) {
    return new Promise((resolve, reject) => {
      this.axiosService
        .delete(path, { headers, data: apiData })
        .then((res) => {
          console.log("DELETE API Response: ", res);
          resolve({
            message: res.data.message,
            data: res.data,
            status: true,
          });
        })
        .catch((error) => {
          console.log("DELETE API Error: ", error);
          this.unauthorizedCheck(error?.response);
          reject({
            message: error?.response?.data?.message
              ? error?.response?.data?.message
              : error?.response?.data,
            status: false,
          });
        })
        .then(() => {
          // here the code which should be excuted always
        });
    });
  }

  putApi(path, apiData, headers = {}) {
    return new Promise((resolve) => {
      this.axiosService
        .put(path, apiData, {
          headers,
        })
        .then((res) => {
          console.log("PUT API Response: ", res);
          resolve({
            message: res.data.message,
            status: true,
            data: res.data,
          });
        })
        .catch((error) => {
          console.log("PUT API Error: ", error);
          this.unauthorizedCheck(error?.response);
          resolve({
            message: error?.response?.data?.message
              ? error?.response?.data?.message
              : error?.response?.data,
            status: false,
          });
        })
        .then(() => {
          // here the code which should be excuted always
        });
    });
  }

  patchApi(path, apiData, headers = {}) {
    return new Promise((resolve) => {
      this.axiosService
        .patch(path, apiData, {
          headers,
        })
        .then((res) => {
          console.log("PATCH API Response: ", res);
          resolve({
            message: res.data.message,
            status: true,
            data: res.data,
          });
        })
        .catch((error) => {
          console.log("PATCH API Error: ", error);
          // this.unauthorizedCheck(error?.response);
          resolve({
            message: error?.response?.data?.message
              ? error?.response?.data?.message
              : error?.response?.data,
            status: false,
          });
        })
        .then(() => {
          // here the code which should be excuted always
        });
    });
  }
}
export default ApiRequestService;
