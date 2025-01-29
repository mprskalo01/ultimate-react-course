import { useState } from 'react';
import { Fact } from '../App';

interface Props {
  item: Fact | undefined;
}

function TabContent({ item }: Props) {
  const [showDetails, setShowDetails] = useState(true);
  const [likes, setLikes] = useState(0);
  console.log('RENDER');
  function handleInc() {
    // setLikes(likes + 1);
    setLikes((likes) => likes + 1);
  }
  function handleTripleInc() {
    // setLikes(likes + 1);
    // setLikes(likes + 1);
    // setLikes(likes + 1); // Doesn't work because it's async

    setLikes((likes) => likes + 1);
    setLikes((likes) => likes + 1);
    setLikes((likes) => likes + 1);
  }

  function handleUndo() {
    setShowDetails(true);
    setLikes(0);
    console.log(likes);
  }

  function handleUndoLater() {
    setTimeout(handleUndo, 2000);
  }

  return (
    <div className="tab-content">
      <h4>{item?.summary}</h4>
      {showDetails && <p>{item?.details}</p>}

      <div className="tab-actions">
        <button onClick={() => setShowDetails((h) => !h)}>
          {showDetails ? 'Hide' : 'Show'} details
        </button>

        <div className="hearts-counter">
          <span>{likes} ❤️</span>
          <button onClick={handleInc}>+</button>
          <button onClick={handleTripleInc}>+++</button>
        </div>
      </div>

      <div className="tab-undo">
        <button onClick={handleUndo}>Undo</button>
        <button onClick={handleUndoLater}>Undo in 2s</button>
      </div>
    </div>
  );
}

export default TabContent;
