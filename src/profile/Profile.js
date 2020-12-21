import React from "react";

const Profile = ({ List, children }) => {
  const handleClick = (name) => alert("houssem");
  return (
    <div>
      {List.map((el, index) => (
        <div className="parent">
          <img
            src={children}
            style={{ width: "200px", height: "200px" }}
            alt="image"
            className="photo"
          />
          <div>{el.fullName}</div>
          <div>{el.bio}</div>
          <div>{el.profession}</div>
          <button onClick={() => handleClick(el.name)}>Click</button>
        </div>
      ))}
    </div>
  );
};

export default Profile;
