import axios from "axios";

export const api = async (paramObject) => {
  const response = await axios(paramObject);

  return response.data;
};
