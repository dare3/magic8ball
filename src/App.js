import React from 'react';
import EightBall from './EightBall';
import ColorBoxes from './ColorBoxes';
import './EightBall.css';

const App = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Magic Eight Ball</h1>
      <EightBall />
      <h1>Color Boxes</h1>
      <ColorBoxes />
    </div>
  );
};

export default App;
