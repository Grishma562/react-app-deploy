import { Dispatch } from "redux";

export const depositMoney = (amount: number) => {
  return (dispatch:Dispatch) => {
    dispatch({
      type: 'deposit',
      payload: amount,
    });
  };
};

export const withdrawMoney = (amount: number) => {
  return (dispatch:Dispatch) => {
    dispatch({
      type: 'withdraw',
      payload: amount,
    });
  };
};
