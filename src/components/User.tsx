type UserProps = {
name: string;
profession: string;
description: string;
Skills: string[];
online: boolean;
profile: string;
}

export const User = (props: UserProps) => {
return (
<div className="cardContainer bg-violet-100 m-4 p-2 rounded-md w-100 max-w-full text-center relative border-2 border-red-50">

    <span className={`cardTitle bg-green-500 font-bold py-2 px-4 rounded-full p-2 m-2 text-left text-sm absolute top-4
        left-4 ${props.online ? "bg-green-500 hover:bg-green-600 " : "bg-red-500 hover:bg-red-600 " }`}>{props.online ?
        "ONLINE" : "OFFLINE"}</span>
    <img className="profileimg mx-auto w-38 h-38 mt-8 rounded-full drop-shadow-lg " src={props.profile} alt="user" />
    <div className="cardContent p-2 m-2">
        <h2 className="heading">{props.name}</h2>
        <h2 className="heading">{props.profession}</h2>
        <p className="description">{props.description}</p>
    </div>
    <div>
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full p-2 m-2  ">Message</button>
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full p-2 m-2 ">Follow</button>
    </div>
    <div>
        <h4 className="heading text-left m-0 p-1 mb-4 mt-4">Skills :</h4>
        <ul className="skills m-0 p-0 text-left">
            {props.Skills.map((skill, index) => (
            <li className="list border-2 rounded-sm p-2 ml-2 mr-2 text-bold inline-block m-2 " key={index}>{skill} </li>
            ))}
        </ul>
    </div>

</div>
)
}