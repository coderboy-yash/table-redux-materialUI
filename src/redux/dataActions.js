import axios from "axios";

// Action Types
export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

// Action Creator
export const fetchData = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_DATA_REQUEST });
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_DATA_FAILURE, payload: error.message });
  }
};
