import React from "react";
import Images from "./images/Images";

import './approach.css'

const Approach = () => {
  return (
    <article className="approach">
      <Images />
      <div className="approach__text">
        <h3>
          Our approach to <span>sustainable impact</span>
        </h3>
        <p>
          The Chess in Slums, Africa is reimagining education using chess as a
          tool/framework to aid cognition and empower the minds of children in
          impoverished communities.The initiative fosters the intellectual and
          social development of underprivileged children through chess
          education. CISA is on a mission to teach and unlock the potential in
          every child by using the game of chess as a framework to promote
          education and raise champions from slum communities in Africa.
          Convener, Babatunde Onakoya, believes that a pawn can go on to become
          a king and he likens these children in slum communities as pawns who
          just need the right push by the right person to become a queen.
          Together with his team, they have introduced the magic of chess to
          various children- from being complete beginners to competing globally.
        </p>
      </div>
    </article>
  );
};

export default Approach;
