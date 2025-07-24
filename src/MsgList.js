import { Msg } from "./Msg";

function MsgList() {
  const names = ["Jeevan", "Ethan", "Siya", "Jamie"];

  console.log(names);
  // Is the code Dry?
  // Array of Strings -> Array of JSX
  // {} -> Interpolation inside
  return (
    <div>
      {names.map((nm) => (
        <Msg name={nm} />
      ))}
    </div>
  );
}
