import React, { useReducer, useState, useContext } from "react";
import StudentContext from "./StudentContext";

const RightCard = () => {
  let {dispatch,state} = useContext(StudentContext);
  let {firstName,lastName,gender,other,selectedOption}  = state

  const [studentData, setStudentData] = useState([]);

  const updateForm = (e, type) => {
    dispatch({ type: "UPDATE_STATE", key: type, value: e.target.value });
  };

  const submitHandler = () => {
    let studentObj = {
      id: studentData.length + 1,
      firstName,
      lastName,
      gender,
      other,
      selectedOption,
    };

    let _studentData = [...studentData];
    _studentData.push(studentObj);
    setStudentData(_studentData);

    dispatch({ type: "ALL_STUDENT" , value :_studentData });
    dispatch({ type: "RESET_STATE" });
  };

  return (
    <div>
      First Name :
      <input
        type="text"
        id="firstName"
        value={firstName}
        onChange={(e) => updateForm(e, "firstName")}
      />
      <br />
      Last Name :
      <input
        type="text"
        id="lastName"
        value={lastName}
        onChange={(e) => updateForm(e, "lastName")}
      />
      <br />
      Gender :
      <div>
        <input
          type="radio"
          value="male"
          checked={gender == "male" && true}
          onChange={(e) => updateForm(e, "gender")}
          name="radioGender"
        />
        Male &nbsp;&nbsp;
        <input
          type="radio"
          value="female"
          checked={gender == "female" && true}
          onChange={(e) => updateForm(e, "gender")}
          name="radioGender"
        />
        Female
      </div>
      <br />
      {gender == "female" && (
        <input
          type="text"
          id="lastName"
          value={other}
          onChange={(e) => updateForm(e, "other")}
        />
      )}
      {gender == "male" && (
        <>
          <span> select value </span>
          <select
            onChange={(e) => {
              updateForm(e, "selectedOption");
            }}
          >
            <option value="1"> 1 </option>
            <option value="2"> 2</option>
          </select>
        </>
      )}
      <br />
      <button onClick={submitHandler}> save </button>
      {/* {studentData.length >0 ? <div>Data saved</div> : <div> data not saved</div> } */}
    </div>
  );
};

export default RightCard;

//post@mtalkz.com
