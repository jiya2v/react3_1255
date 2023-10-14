import React, { useState } from 'react';
import './ColorPicker.css';

const ColorPicker = ({ colors }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [isColorArrayVisible, setIsColorArrayVisible] = useState(true);

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setIsColorArrayVisible(false);
  };

  const handleButtonClick = () => {
    setIsColorArrayVisible(!isColorArrayVisible);
  };

  return (
    <div className="color-picker">
      {/* First Layer - Light Purple Background */}
      <div className="layer background-layer">
        <h1 className="color-picker-heading">Color Picker</h1>
      </div>

      {/* Second Layer - Color Picker Box */}
      <div className="layer color-layer" style={{ backgroundColor: selectedColor || 'white' }}>
        {isColorArrayVisible && (
          <div className={`color-array ${isColorArrayVisible ? 'visible' : ''}`}>
            {colors.map((color, index) => (
              <div
                key={index}
                className={`color-item ${selectedColor === color ? 'active' : ''}`}
                style={{ backgroundColor: color }}
                onClick={() => handleColorClick(color)}
              ></div>
            ))}
          </div>
        )}
        <button
          className="color-picker-button"
          onClick={handleButtonClick}
          style={{ backgroundColor: selectedColor || 'lightpink' }}
        >
          Pick a Color
        </button>
      </div>
    </div>
  );
};

export default ColorPicker;
