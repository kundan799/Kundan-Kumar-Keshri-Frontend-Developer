import axios from "axios";
import {
  GET_DATA_FAILURE,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
} from "./product.types";

export const getdataAPI = (status, launch, type) => (dispatch) => {
  dispatch({ type: GET_DATA_REQUEST });
  return axios
    .get(
      `https://api.spacexdata.com/v3/capsules?status=${status}&type=${type}&original_launch=${launch}`
    )
    .then((res) => {
      //console.log(res)
      let length = res.data.length;
      let totalpages = Math.ceil(length / 10);
      dispatch({
        type: GET_DATA_SUCCESS,
        payload: { data: res.data, pages: totalpages },
      });
    })
    .catch((e) => {
      dispatch({ type: GET_DATA_FAILURE });
    });
};
