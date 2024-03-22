import React from "react";
import { Link } from "react-router-dom";

import HomeBannerPicture from "../../assets/img/home.jpeg";
import logements from "../../assets/logements.json";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";

const Home = () => {
  return (
    <div>
      <Banner banner={HomeBannerPicture} title={"Chez vous, \n partout et ailleurs"} />
      <div className="card-container">
        {logements.map((logement) => <Link key={logement.id} to={`/estate/${logement.id}`}><Card key={logement.id} titre={logement.title} img={logement.pictures[0]} /></Link>)}
      </div>
    </div >
  );
};

export default Home;