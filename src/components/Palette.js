import React from 'react';
import './Palette.css';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const PaletteItem = ({ color }) => {
  return (
    <div
      className="PaletteItem"
      style={{ backgroundColor : color }}
    />
  )
}

const Palette = (props) => {
  return (
    <div className="Palette">
      <h2>Select Color</h2>
      <div className="colors">
        {colors.map((color) => (
          <PaletteItem
            key={color}
            color={color}
          />
        ))}
      </div>
    </div>
  )
}

export default Palette;
