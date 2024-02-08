const initialState = {
    amount: 0,
    data: null,
    loading: false,
    error: null,
  };
  
  const asyncActionReducers = (state = initialState, action: any) => {
    switch (action.type) {
     
      case 'fetch_data_start':
        return { ...state, loading: true, error: null };
  
      case 'fetch_data_success':
        return { ...state, data: action.payload, loading: false };
  
      case 'fetch_data_error':
        return { ...state, loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  
  export default asyncActionReducers;
  