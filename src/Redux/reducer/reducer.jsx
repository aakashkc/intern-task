import { API_REQUEST, API_SUCCESS, API_FAILURE } from '../action/action';


const initialState = {
  data : [],
  isLoading : false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case API_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case API_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: null,
      };
    case API_FAILURE:
      return {
        ...state,
        data: [],
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;