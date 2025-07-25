import { useState } from 'react';
import { ColorBox } from './ColorBox';


// State Changes -> Update UI (useState)
//Typing event -> Listens-> OnChange, onInpt, onKeyPress
// onChange -> Works with Text,Checkbox, Radio buttons ,etc
//event.target -> Where event originate from
// component is a function of color
export function ColorGame() {
  const [color, setColor] = useState("");

  const styles = {
    background: color,
    fontSize: "24px",
  };
  //Task 1.1 List these colors using ColorBox
  const [colors, setColors] = useState(["pink", "orange", "purple"]);
  // const addColor = (event) => {
  //   event.preventDefault();
  //   setColors([...colors, color]);
  // };
  return (
    <div>
      <div className=".color-form-container">
        <input
          style={styles}
          onChange={(event) => setColor(event.target.value)}
          type="text"
          placeholder="Your fav color.." />
        {/* <h1>{color}</h1> */}
        <button onClick={() => setColors([...colors, color])}>+ Add</button>
      </div>
      <div className="color-box-list-container">
        {colors.map((color) => (
          <ColorBox color={color} />
        ))}
      </div>
    </div>
  );
}
