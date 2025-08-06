import { useEffect } from "react";

export function Thought(props) {
  const { thought, removeThought } = props;
  
// Timer setup in the component
  useEffect(() => {
    const timeUp = setTimeout(() => {
    removeThought(thought.id);
    }, thought.expiresAt - Date.now());

    return () => {
      clearTimeout(timeUp);
    }
  }, [thought, removeThought]);

  const handleRemoveClick = () => {
    removeThought(thought.id);
  };

  return (
    <li className="Thought">
      <button
        aria-label="Remove thought"
        className="remove-button"
        onClick={handleRemoveClick}
      >
        &times;
      </button>
      <div className="text">{thought.text}</div>
    </li>
  );
}
