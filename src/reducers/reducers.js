let initialState = {
  loading: false,
  list: [],
  error: null
};

function reducer(state = initialState, action) {
  // var { list, cart, total } = state;
  switch (action.type) {
    case "FETCH_DATA_REQUEST":
      return {
        ...state,
        loading: true,
        error: null
      };
    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        loading: false,
        list: action.item
      };
    case "FETCH_DATA_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        list: []
      };
    default:
      return state;
  }
}

export default reducer;
