import React from "react";
import PromptSuggestion from "./PromptSuggestion";

type Props = {
  onPromptClick: (prompt: string) => void;
};

const PromptSuggestionRow: React.FC<Props> = ({ onPromptClick }) => {
  const prompts = [
    "Who was Luke Skywalker?",
    "Who played Darth Vader in the movies?",
    "How many movies are there in total?",
  ];

  return (
    <div className="prompt-suggestion-row">
      {prompts.map((prompt, index) => (
        <PromptSuggestion
          key={index}
          prompt={prompt}
          onPromptClick={onPromptClick}
        />
      ))}
    </div>
  );
};

export default PromptSuggestionRow;
