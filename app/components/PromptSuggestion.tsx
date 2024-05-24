import React from "react";

type Props = {
  prompt: string;
  onPromptClick: (prompt: string) => void;
};

const PromptSuggestion: React.FC<Props> = ({ prompt, onPromptClick }) => {
  return (
    <button
      onClick={() => onPromptClick(prompt)}
      className="prompt-suggestion-button"
    >
      {prompt}
    </button>
  );
};

export default PromptSuggestion;
