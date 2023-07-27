// app.tsx

import React, { useState } from 'react';

const App: React.FC = () => {
  const [number, setNumber] = useState<number>(0);

  const incrementNumber = () => {
    setNumber(number + 1);
  };

  return (
    <div>
      <h1>Number: {number}</h1>
      <button onClick={incrementNumber}>Increment</button>
    </div>
  );
};

export default App;
