import { User } from "./components/User.tsx";


const UserData = [
  {
  name: "Vishwanath",
  profession: "Front End Dev",
  description: "I focus on creating sleek, high-performance websites that deliver seamless user experiences across all devices.",
  Skills: ["JavaScript", "CSS", "React", "HTML", "TypeScript"],
  online: true,
  profile:"/IMG_0304.JPG",
  },
  //Add card dinamically to the UserCard component
  {
  name: "Ramkumar",
  profession: "Full Stack Dev",
  description: "I focus on creating sleek, high-performance apps that deliver seamless user experiences across all devices.",
  Skills : ["JavaScript","FrontEnd","Node.js","React","Python","C++"],
  online: false,
  profile: "/user-img.svg",
  },


];

export const UserCard = () => {
  return (
    <>
    {UserData.map((user,index) => (
      <User key={index} 
      name={user.name}
      profession={user.profession} 
      description={user.description} 
      Skills={user.Skills} 
      online={user.online} 
      profile={user.profile} />
    ))}
    </>
  );
};
