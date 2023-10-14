import React from 'react';
import ColorPicker from './components/ColorPicker';
import './App.css';
import './index.css';

function App() {
  const colors = [
    '#FF0000', '#FFA500', '#FFFF00', '#008000', '#0000FF', '#4B0082', '#800080', '#808080',
    '#A52A2A', '#D2691E', '#FF7F50', '#7FFF00', '#40E0D0', '#6495ED', '#9370DB', '#B0C4DE'
  ];

  return (
    
    <div className="App">
      <h1 style={{top:0}}>Color Picker</h1>
      
      <ColorPicker colors={colors} />
      
    </div>
  );
}

export default App;