
export const ADD = 'ADD';
export const EDIT = 'EDIT';
export const DELETE = 'DELETE';

const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
};
const editMessage = (index, message) => {
  return {
    type: EDIT,
    index: index,
    message: message
  }
};
const deleteMessage = (index) => {
  return {
    type: DELETE,
    index: index
  }
};

export {addMessage, editMessage, deleteMessage};
