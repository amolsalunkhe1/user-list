import axios from "axios";
import { fetchDataRequest, fetchDataSuccess, fetchDataError } from "./action";

export function fetchUsers() {
  return dispatch => {
    dispatch(fetchDataRequest());
    axios
      .get(
        "https://jsonplaceholder.typicode.com/users"
      )
      .then(response => {
        dispatch(fetchDataSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchDataError(error));
      });
  };
}
