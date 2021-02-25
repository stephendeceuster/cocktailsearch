import axios from "axios";

// INITIAL STATE
const initialState = {
  cocktails: [],
  loading: false,
  search: "",
  error: false,
};

//TYPES
const COCKTAIL_FETCH_START = "COCKTAIL_FETCH_START";
const COCKTAIL_FETCH_SUCCESS = "COCKTAIL_FETCH_SUCCESS";
const COCKTAIL_FETCH_ERROR = "COCKTAIL_FETCH_ERROR";

// ACTION CREATORS
const fetchCocktailsStart = (str) => ({
  type: COCKTAIL_FETCH_START,
  payload: str,
});
const fetchCocktailsSuccess = (cocktails) => ({
  type: COCKTAIL_FETCH_SUCCESS,
  payload: cocktails,
});
const fetchCocktailsError = () => ({
  type: COCKTAIL_FETCH_ERROR,
});

export const getCocktails = (str) => 
  async (dispatch, getState) => {
    dispatch(fetchCocktailsStart(str));
    console.log(getState().cocktailSearchState);
    try {
      const response = await axios(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${
          getState().cocktailSearchState.search
        }`
      );
      dispatch(fetchCocktailsSuccess(response.data.drinks))
    } catch (error) {
      dispatch(fetchCocktailsError());
    }
};

// REDUCER
const cocktailSearchReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case COCKTAIL_FETCH_START:
      return { ...state, search: payload, loading: true, error: false };
    case COCKTAIL_FETCH_SUCCESS:
      return { ...state, cocktails: payload, loading: false, error: false };
    case COCKTAIL_FETCH_ERROR:
      return { ...state, loading: false, error: true };
    default:
      return { ...state };
  }
};

export default cocktailSearchReducer;
