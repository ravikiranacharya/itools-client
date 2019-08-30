import httpService from "../httpService";

export async function getRequest(url) {
  const response = await httpService.get(url);
  return response.data;
}

export default {
  get: getRequest
};
