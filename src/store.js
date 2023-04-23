import { createStore } from "redux";

const initialState = {
  user: {
    email: "darryn@randrtechsa.com",
    password: "P@55w0rd@1",
  },
}; 
     

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
