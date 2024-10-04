import React from "react";
import { StyledSelect, SelectWrapper } from "./styled";

const Select = ({ value, onChange, options, id }) => {
    return (
        <SelectWrapper>
            <StyledSelect value={value} onChange={onChange} id={id}>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </StyledSelect>
        </SelectWrapper>
    );
};

export default Select;
