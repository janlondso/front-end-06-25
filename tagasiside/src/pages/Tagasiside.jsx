import { useRef, useState } from "react";

function Tagasiside() {
    const tagasisided = ["Oli hea", "Huvitav", "Teistsugune", "Põnev"];
    const [feedback, setFeedback] = useState(tagasisided);
    const tagasisideRef = useRef();

    const kustuta = (index) => {
      feedback.splice(index,1);
      setFeedback(feedback.slice());
    }

    const lisaUusTagasiside = () => {
      feedback.push(tagasisideRef.current.value);
      setFeedback(feedback.slice());
    }

  return (
    <div>
        <div>Tagasisided:</div>
          {feedback.map((tagasiside, index) =>
          <div key={tagasiside}>
            <span>{tagasiside}</span>
            <button onClick={() => kustuta(index)}>x</button>
        </div>)}
            <br />
          <label>Lisa uus tagasiside</label>
          <input ref={tagasisideRef} type="text" />
          <button onClick={() => lisaUusTagasiside()}>Sisesta</button>
    </div>
  )
}

export default Tagasiside
