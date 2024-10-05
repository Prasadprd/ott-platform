import ApiRequestService from "./index";

const ApiService = new ApiRequestService("http://localhost:8000/v1");

export const getUser = (user) => {
  const requestData = {
    email: user.email,
    password: user.password,
  };

  return ApiService.postApi(`auth/login`, {}, requestData);
};
