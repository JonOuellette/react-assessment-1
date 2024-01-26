import React from "react";

const Prompt = ({name, value, onInputChange}) => {
    return (
        <input
        type="text"
        placeholder={name}
        name={name}
        value={value}
        onChange={onInputChange}
        />
    );
}

export default Prompt;