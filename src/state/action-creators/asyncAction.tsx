import { Dispatch } from "redux";

const fetchData = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: 'fetch_data_start' });

      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();

      const usernamesAndNames = data.map((user: any) => ({
        username: user.username,
        name: user.name,
      }));

      dispatch({
        type: 'fetch_data_success',
        payload: usernamesAndNames,
      });
    } catch (error:any) {
      dispatch({
        type: 'fetch_data_error',
        payload: error.message,
      });
    }
  };
};
export default fetchData;