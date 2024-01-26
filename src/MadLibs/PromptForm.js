import React, {useState} from "react";
import Prompt from "./Prompt";

const PromptForm = ({onSubmit}) => {

    const initialInputState = {
        noun1:  '',
        noun2:  '',
        adjective: '',
        color: '',
    };

    const [inputs, setInputs] = useState(initialInputState);

    const handleInputChange =(e) => {
        const {name, value } = e.target;
        setInputs(prev => ({ ...prev, [name]: value}));
    };

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(inputs);
    };

    return (
        <form onSubmit={handleSubmit}>
            {Object.keys(initialInputState).map(key => (
                <Prompt
                key={key}
                name={key}
                value={inputs[key]}
                onInputChange={handleInputChange}
                />
            ))}
            <button type="submit">Generate Story</button>
        </form>
    );
}

export default PromptForm;