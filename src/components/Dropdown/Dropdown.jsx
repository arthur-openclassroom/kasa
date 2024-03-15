import React, { useState } from "react";
import ArrowUp from "../../assets/svg/arrow-up.svg";
const Dropdown = ({ title, labelList }) => {
  const [isOpened, setOpened] = useState(false);

  return (
    <div className="dropdown-component">
      <div className="dropdown-title-container">
        <span className="dropdown-title">
          {title}
          <img src={ArrowUp} className={isOpened ? "opened" : ""} onClick={() => setOpened(!isOpened)} />
        </span>
      </div>
      <ul className={`dropdown-content ${isOpened ? "opened" : ""}`} >
        {labelList.map((value) => {
          return <li key={value}>{value}</li>
        })}
      </ul>
    </div>

  );
};

export default Dropdown;