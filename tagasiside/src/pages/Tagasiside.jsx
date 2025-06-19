import { useState } from "react";

function Tagasiside() {
    const tagasisided = ["Oli hea", "Huvitav", "Teistsugune", "Põnev"];
    const [feedback, setFeedback] = useState(tagasisided);

  return (
    <div>
        <div>Kokku on: {feedback.length} tagsisidet.</div> <br />
        {feedback.map(tagasiside => <div key={tagasiside}>{tagasiside}</div>)}
    </div>
  )
}

export default Tagasiside
