import ApiRequestService from "./index";

const ApiService = new ApiRequestService("http://localhost:8000/v1");

export const userLogin = (user) => {
  const requestData = {
    email: user.email,
    password: user.password,
  };

  return ApiService.postApi(`auth/login`, {}, requestData);
};
export const register = (user) => {
  const requestData = {
    name: user.name,
    email: user.email,
    password: user.password,
  };

  return ApiService.postApi(`auth/register`, {}, requestData);
};
