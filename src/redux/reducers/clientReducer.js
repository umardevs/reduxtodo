import { ADD_CLIENT, DEL_CLIENT, EDIT_CLIENT, SAVE_EDIT } from "./actionTypes";

const initState = {
  client: [],
  Edit: {},
};
export const clientReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_CLIENT:
      return { ...state, client: [...state.client, action.pay] };
    case DEL_CLIENT:
      return {
        ...state,
        client: state.client.filter((el) => el.id !== action.id),
      };
    case EDIT_CLIENT:
      return { ...state, Edit: action.pay };
    case SAVE_EDIT:
      return { ...state, client: action.pay };
    default:
      return state;
  }
};
