import ApiRequestService from "./index";

const ApiService = new ApiRequestService("http://localhost:8000/v1");

export const getContentById = (id) => {
  return ApiService.getApi(`content/${id}`, {}, {});
};
