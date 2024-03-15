import React from "react";
import Tag from "../../components/Tag/Tag";
import Card from "../../components/Card/Card";
import Dropdown from "../../components/Dropdown/Dropdown";
const Home = () => {
  return (
    <div>
      Home
      <Tag label={"Tesesttettestestesttestst"}/>
      <Card titre={"TestTesttettestestesttestst"} img={"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"} />
      <Dropdown title={"Équipements"} labelList={["Climatisation", "Wi-Fi", "Cuisine", "Espace de travail", "Fer à repasser"]} />
    </div>
    );
};

export default Home;