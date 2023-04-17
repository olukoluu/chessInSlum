import React from "react";
import Card from "../../../UI/card/Card";
import { workstream } from "../../data";

import './workstream.css';

const Workstream = () => {
  return (
    <article className="workstream">
      <h3>Our Program Workstream</h3>
      <div className="workstream__cards">
        {workstream.map((item) => {
          return (
            <Card
              key={item.no}
              src={item.img}
              title={item.title}
              text={item.text}
            />
          );
        })}
      </div>
    </article>
  );
};

export default Workstream;
