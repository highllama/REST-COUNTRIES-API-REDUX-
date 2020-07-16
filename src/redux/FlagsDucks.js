//CONSTANTES
const initialData = {
  array: [],
};

//TYPES
const GET_FLAGS_SUCCES = "GET_FLAGS_SUCCES";
const SEARCH_FLAGS = "SEARCH_FLAGS";

//REDUCER

export default function flagsReducer(state = initialData, action) {
  switch (action.type) {
    case GET_FLAGS_SUCCES:
      return {
        ...state,
        array: action.payload,
      };
    case SEARCH_FLAGS:
      return {
        ...state,
        array: action.payload,
      };
    default:
      return state;
  }
}

//ACTIONS

export const getFlagsAction = () => (dispatch, getState) => {
  fetch("https://restcountries.eu/rest/v2")
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: GET_FLAGS_SUCCES,
        payload: data,
      })
    )
    .catch((err) => console.log(err));
};

export const searchFlagsAction = (search) => (dispatch, getState) => {
  const flags = getState().flags;
  console.log(flags.array);
  console.log(search);

  const filter = flags.array.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
  console.log(filter);
  dispatch({
    type: SEARCH_FLAGS,
    payload: filter,
  });
};
