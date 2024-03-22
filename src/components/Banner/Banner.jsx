import React from "react";

const Banner = (props) => {
  return (

    <div className="banner-component" style={{
      backgroundImage: `url(${props.banner})`, backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>
      <span className="title">{props.title}</span>
    </div>
  );
};

export default Banner;