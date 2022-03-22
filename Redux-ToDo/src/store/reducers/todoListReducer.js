import { ADD, EDIT, DELETE } from "../actions/updateList";


const messageReducer = (state = [], action) => {
  let copyState = [...state];
  switch (action.type) {
    case ADD:
      return [...state, action.message];
    case EDIT:
      copyState[action.index] = action.message;
      return copyState;
    case DELETE:
      copyState.splice(action.index, 1)
      return copyState;
    default:
      return state;
  }
};
export default messageReducer;
