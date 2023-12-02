import { createContext, useReducer } from "react";

export const Userdata = createContext();

export const Userdataprovider = ({ children }) => {
  let initialstate = {
    username: "",
    date: "",
    course: "",
    gender: "",
    issuer: "",
  };

  const handleReducer = (state, action) => {
    switch (action.type) {
      case "SET_USER_DATA":
        return {
          ...state,
          username: action.payload.username,
          date: action.payload.date,
          course: action.payload.course,
          gender: action.payload.gender,
          issuer: action.payload.issuer,
        };

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(handleReducer, initialstate);

  return (
    <Userdata.Provider value={{ data: state, dispatch }}>
      {children}
    </Userdata.Provider>
  );
};
