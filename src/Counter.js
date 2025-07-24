import React, { useState } from "react";

// EventListener - Browser - onclick -> onClick
// function Counter() {
//   //react doesn't listen to this variable
//   //react listens to hook variable
//   let like = 0;
//   return (
//     <div>
//       <button
//         onClick={() => {
//           console.log("Clicked...");
//           like = like + 1;
//         }}
//       >
//         Like
//       </button>
//       {/* <button onClick={(like) => like + 1}>Like</button> */}
//       <h1>{like}</h1>
//     </div>
//   );
// }
export function Counter() {
  //react doesn't listen to this variable
  //react listens to hook variable - if variable changes-> it will rerender (reloading)
  //hooks -function- starts with 'use'
  // let like = 0;
  const [like, setLike] = useState(10);
  const [dislike, setDislike] = useState(40);
  // const [state,setState]= useState(Initial Value);
  // setLike-> updates the like
  return (
    <div>
      <button
        onClick={() => {
          // console.log("Clicked...");
          // like = like + 1;
          setLike(like + 1);
        }}
      >
        👍{like}
      </button>
      <button
        onClick={() => {
          setDislike(dislike - 1);
        }}
      >
        👎 {dislike}
      </button>
      {/* <button onClick={(like) => like + 1}>Like</button> */}
      {/* <h1>{like}</h1> */}
    </div>
  );
}
