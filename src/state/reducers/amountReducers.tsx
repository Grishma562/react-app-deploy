// reducers/index.ts
const initialState = {
  amount: 0,
};

const amountReducers = (state = initialState, action: any) => {
  switch (action.type) {
    case 'deposit':
      return { ...state, amount: state.amount + action.payload };
    case 'withdraw':
      return { ...state, amount: state.amount - action.payload };
    default:
      return state;
  }
};

export default amountReducers;
