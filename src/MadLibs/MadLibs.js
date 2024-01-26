import React, { useState } from 'react';
import PromptForm from './PromptForm';
import StoryTemplate from './StoryTemplate';

const MadLibs = () => {
    const [story, setStory] = useState('');
    const [isStoryGenerated, setIsStoryGenerated] = useState(false); 

    const generateStory = (inputs) => {
        const newStory = StoryTemplate(inputs);
        setStory(newStory);
        setIsStoryGenerated(true); 
    };

    return (
        <div className="MadLib">
            <h1>MadLibs Adventure</h1>
            {!isStoryGenerated && <PromptForm onSubmit={generateStory} />} 
            {isStoryGenerated && (
                <div className="Madlib-story">
                    <p>{story}</p>
                    <button onClick={() => setIsStoryGenerated(false)}>Reset</button> 
                </div>
            )}
        </div>
    );
};

export default MadLibs;
