const initialState ={
    fetching:false,
    fetched:false,
    posts:[],
    error:null
}

export default function postsReducer(state = initialState, { type, payload }) {
  switch (type) {
    case "CUSTOMTYPE_PENDING":
      return { ...state, fetching: true };
    case "CUSTOMTYPE_REJECTED":
      return { ...state, fetching: false, error: payload };
    case "CUSTOMTYPE_FULFILLED":
      return { ...state, fetching: false, fetched: true, posts: payload };

    default:
      return state;
  }
}