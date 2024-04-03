import axios from "axios";

function isAuthenticated() {
  const token = localStorage.getItem("token");
  return token ? `Bearer ${token}` : "";
}

const token = isAuthenticated();

const axiosInstance = axios.create({
  baseURL: "http://localhost:4040/api/v1",
  timeout: 60000,
  headers: {
    Authorization: token,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => config,
  (error) => {
    alert("Oops, something went wrong");
    // Do something with request error
    Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // if (response.data && response.data.message) {
    //   openNotification('success', response.data.message)
    // }
    return response;
  },
  (error) => {
    if (
      error.response &&
      error.response.status &&
      error.response.status === 404
    ) {
      alert("error", error.response.statusText || "Not Found");
      // window.location = '/logout'
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
