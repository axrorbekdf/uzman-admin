import { localApiPoint, apiPoint } from "~/constants";
import { getItem } from "~/helpers/persistaneStorage";

export const useApiFetch = () => { 
    
    return $fetch.create({
      baseURL: localApiPoint,
      headers: {
        Authorization: `Bearer ${getItem('token')}`,
      },
    });

  };