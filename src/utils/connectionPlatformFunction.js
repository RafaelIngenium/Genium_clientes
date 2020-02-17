import { apiConectionPlatform } from "./api";

export const getDisplayName = async userId => {
  try {
    return await apiConectionPlatform.get(`displayname?id=${userId}`);
  } catch (error) {
    console.error(error);
    return "";
  }
};
