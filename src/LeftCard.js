import React, { useState, useContext } from "react";
import StudentContext from "./StudentContext";

const LeftCard = () => {
  let { dispatch, state } = useContext(StudentContext);
  let { studentArr } = state;

  function editHandler(id) {
    console.log("edit ", id);
  }
  return (
    <div>
      <table>
        <tr>
          <th> First name</th>
          <th> Last name</th>
          <th> Gender </th>
          <th> Other </th>
          <th> Selected </th>
          <th> action </th>
        </tr>

        {studentArr?.map((value, index) => {
          return (
            <tr key={index} id={value.id}>
              <td> {value.firstName} </td>
              <td> {value.lastName} </td>
              <td> {value.gender} </td>
              <td> {value.other} </td>
              <td> {value.selectedOption} </td>
              <td onClick={() => editHandler(value.id)}> edit </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default LeftCard;
