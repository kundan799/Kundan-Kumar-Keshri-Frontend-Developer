import {
  GET_DATA_FAILURE,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
} from "./product.types";

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  totalpages: 0,
};
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DATA_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case GET_DATA_SUCCESS: {
      return {
        ...state,
        data: payload.data,
        isLoading: false,
        isError: false,
        totalpages: payload.pages,
      };
    }
    case GET_DATA_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    default:
      return state;
  }
};
export { reducer };
