import { localApiPoint, apiPoint } from "~/constants";
import { getItem } from "~/helpers/persistaneStorage";

export const useApiFetch = () => { 
    
    return $fetch.create({
      baseURL: apiPoint,
      headers: {
        Authorization: `Bearer ${getItem('token')}`,
      },
    });

  };