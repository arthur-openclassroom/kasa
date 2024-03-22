import React from "react";
import { useParams } from "react-router";
import logements from "../../assets/logements.json"
import Gallery from "../../components/Gallery/Gallery";
import Tag from "../../components/Tag/Tag";
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture";
import StarsNotation from "../../components/Star/StarsNotation";
import Dropdown from "../../components/Dropdown/Dropdown";

const Estate = (props) => {
  const { id } = useParams();
  const currentEstate = logements[logements.findIndex((logement) => logement.id === id)];
  return (
    <div className="estate-page">
      <Gallery imgList={currentEstate.pictures} />
      <div className="informations">
        <div className="left-column">
          <h1>
            {currentEstate.title}
          </h1>
          <h2>
            {currentEstate.location}
          </h2>
          <div className="tags-container">
            {currentEstate.tags.map((tag) => <Tag key={tag} label={tag} />)}
          </div>
        </div>
        <div className="right-column">
          <ProfilePicture name={currentEstate.host.name} img={currentEstate.host.picture} />
          <StarsNotation rating={currentEstate.rating} />
        </div>
      </div>
      <div className="dropdowns-container">
        <Dropdown title={"Description"} labelList={[currentEstate.description]} />
        <Dropdown title={"Équipements"} labelList={currentEstate.equipments} />
      </div>
    </div >
  );
};

export default Estate;