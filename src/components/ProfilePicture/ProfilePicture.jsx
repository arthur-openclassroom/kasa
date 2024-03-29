import React from "react";

const ProfilePicture = (props) => {
    const name = props.name.replaceAll(" ", "\n");;
    return (
        <div className="profile-picture-component">
            <span>
                {name} 
            </span>
            <img 
                alt={"Photo de profil de l'hôte"}
                src={props.img}
            />
        </div>
    );
};

export default ProfilePicture;
