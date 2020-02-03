import axios from "axios";
import api from "../api";

import * as types from "../redux-constants";

/* Declaration Start */
export type Data = {
  data: {
    title: string;
    content: string;
  }[];
};
export type TypeData = {
  type: types.ConstantTypes;
} & Data;
/* Declaration End */

export const getList = () => {
  return async (dispatch: any) => {
    let res;
    try {
      res = await axios.get(api.list);
    } catch (error) {
      console.error(error);
    }
    dispatch({ type: types.FETCH_SUCCESS_LIST, data: res.data });
  };
};
