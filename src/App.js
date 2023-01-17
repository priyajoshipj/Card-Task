import "./App.css";
import RightCard from "./RightCard";
import LeftCard from "./LeftCard";
import StudentContext from "./StudentContext";
import React, { useReducer, useState } from "react";

const initState = {
  firstName: "",
  lastName: "",
  gender: "",
  other: "",
  selectedOption: "",
};

function App() {

  const handle = (state, action) => {
    if (action.type == "UPDATE_STATE") {
      console.log(" inside handle ",action)
      return {
        ...state,
        [action.key]: action.value,
      };
    }
    if(action.type == "RESET_STATE") {
      return {...state,
        firstName: initState.firstName,
        lastName: initState.lastName,
        gender: initState.gender,
        other: initState.other,
        selectedOption: initState.selectedOption,
      }
    }

    if(action.type == "ALL_STUDENT"){
      return {
        ...state,
        studentArr : action.value,
      };
    }

    
  };

  const [state, dispatch] = useReducer(handle, {
    firstName: initState.firstName,
    lastName: initState.lastName,
    gender: initState.gender,
    other: initState.other,
    selectedOption: initState.selectedOption,
    studentArr:[]
  });

 
  const store = { state, dispatch };

  return (
    <div className="App">
      <header className="App-header">
        <StudentContext.Provider value={store}>
          <LeftCard />
          <RightCard />
        </StudentContext.Provider>
      </header>
    </div>
  );
}

export default App;
