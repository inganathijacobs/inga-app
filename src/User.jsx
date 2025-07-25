// function User({ name, imgUrl }) {
//   // const name = "Diyali";
//   return (
//     <div>
//       <img src={pic} />
//       <p>
//         <a className="greeting">Hello</a>, {name}🎊
//       </p>
//     </div>
//   );
// }
import { Counter } from "./Counter";
export function User({ name = "Unknown", pic }) {
  return (
    <div className="user-card">
      <img src={pic} alt={name} className="user-pic" />
      <p>
        Hello, <a className="greeting">{name}🎊</a>
      </p>
      <Counter />
    </div>
  );
}
