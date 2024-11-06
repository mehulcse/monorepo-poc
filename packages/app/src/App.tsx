import React from 'react';
import { NumericFormat } from '@monorepo-poc/react-number-format';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* ... existing code ... */}
        <NumericFormat 
          value={658794.56} 
          displayType="text"
          thousandSeparator={true} 
          prefix="$" 
        />
      </header>
    </div>
  );
}

export default App; 