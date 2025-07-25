import { User } from "./User";

export function UserList() {
  const users = [
    {
      name: "Arjun",
      pic: "https://cdn.pixabay.com/photo/2021/06/04/10/29/guy-6309462_640.jpg",
    },
    {
      name: "Chleo",
      pic: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg",
    },
    {
      name: "Jeevan",
      pic: "https://th.bing.com/th/id/R.1cc01c7d5f56da646337fe2eba05a98c?rik=5sw6xxIVPoeN0g&pid=ImgRaw&r=0",
    },
    //Default Unknown
    {
      pic: "https://th.bing.com/th/id/R.1cc01c7d5f56da646337fe2eba05a98c?rik=5sw6xxIVPoeN0g&pid=ImgRaw&r=0",
    },
  ];
  return (
    //name and pic are props=properties
    <div className="user-list-container">
      {/* {users.map(({ name, pic }) => (
              <User name={name} pic={pic} />
            ))} */}
      {users.map((user) => (
        <User {...user} />
      ))}
    </div>
  );

  // return (
  //   <div>
  //     <User
  //       name="Arjun"
  //       imgUrl="https://cdn.pixabay.com/photo/2021/06/04/10/29/guy-6309462_640.jpg"
  //     />
  //     <User
  //       name="Monisha"
  //       imgUrl="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg"
  //     />
  //     <User
  //       name="Saravan"
  //       imgUrl="https://th.bing.com/th/id/R.1cc01c7d5f56da646337fe2eba05a98c?rik=5sw6xxIVPoeN0g&pid=ImgRaw&r=0"
  //     />
  //   </div>
  // );
}
