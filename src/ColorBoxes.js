import React, { useState } from 'react';


// Default colors and box count
const defaultColors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
const defaultBoxCount = 16;

const ColorBoxes = ({ colors = defaultColors, boxCount = defaultBoxCount }) => {
  const [boxes, setBoxes] = useState(() =>
    Array.from({ length: boxCount }, () => colors[Math.floor(Math.random() * colors.length)])
  );
  const [changedIndex, setChangedIndex] = useState(null);

  const changeRandomBoxColor = () => {
    const index = Math.floor(Math.random() * boxCount);
    const newColor = colors[Math.floor(Math.random() * colors.length)];

    setBoxes((prevBoxes) => {
      const newBoxes = [...prevBoxes];
      newBoxes[index] = newColor;
      return newBoxes;
    });

    setChangedIndex(index);
    setTimeout(() => setChangedIndex(null), 1000); // Clear "changed!" text after 1 second
  };

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${Math.sqrt(boxCount)}, 1fr)`, gap: '10px' }}>
        {boxes.map((color, index) => (
          <div
            key={index}
            style={{
              width: '100px',
              height: '100px',
              backgroundColor: color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: changedIndex === index ? '2px solid black' : 'none',
            }}
          >
            {changedIndex === index ? 'changed!' : ''}
          </div>
        ))}
      </div>
      <button onClick={changeRandomBoxColor} style={{ marginTop: '20px' }}>
        Change
      </button>
    </div>
  );
};

export default ColorBoxes;
