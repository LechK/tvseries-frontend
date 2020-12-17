import React from "react";
import * as S from "./DropDownInput.style";

function DropDownInput({ handleChange, options, labelText, value, display }) {
  return (
    <>
      <S.Label className="textInput" htmlFor={value} displayLabel={display}>
        {labelText}
      </S.Label>
      <S.Select onChange={handleChange} defaultValue>
        <option disabled value>
          select an option
        </option>
        {options &&
          options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.season_name}
            </option>
          ))}
      </S.Select>
    </>
  );
}

export default DropDownInput;
