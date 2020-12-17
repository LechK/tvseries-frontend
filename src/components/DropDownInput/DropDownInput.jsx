import React, { useState } from "react";
import * as S from "./DropDownInput.style";

function DropDownInput({ handleChange, options, labelText, value, display }) {
  const [selected, setSelected] = useState(options[0]?.id);

  const onOptionChange = (e) => {
    const value = e.target.value;
    setSelected(value);

    handleChange(value);
  };

  return (
    <>
      <S.Label className="textInput" htmlFor={value} displayLabel={display}>
        {labelText}
      </S.Label>
      <S.Select onChange={onOptionChange} value={selected}>
        <option disabled value>
          select an option
        </option>
        {options &&
          options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.title}
            </option>
          ))}
      </S.Select>
    </>
  );
}

export default DropDownInput;
