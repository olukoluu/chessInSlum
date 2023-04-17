import React from "react";
import { FaChessPawn } from "react-icons/fa";
import Button from "../../../UI/button/Button";

import "./potential.css";

const Potential = () => {
  return (
    <article className="potential">
      <header className="potential__head">
        <div className="head__imgs">
          <img src="./images/littlechess.jpg" alt="" />
          <img src="./images/manchild.jpg" alt="" />
        </div>
        <div className="head__text">
          <h3>We are raising Kings and Queens in the Slums...</h3>
          <p>
            In most of Africa today, when you talk about "Chess", most people
            associate it with Intelligence and Wealth. Chess in Slums is
            changing that narrative as we take the gift of chess to slum
            communities.
          </p>
        </div>
      </header>
      <section className="potential__cards">
        <div className="potential__card">
          <div className="chess__icon">
            <FaChessPawn size={30}/>
          </div>
          <p>
            According to UNICEF, One in every five of the world's out-of-school
            children is in Nigeria. Even though primary education is officially
            free and compulsory, about 10.5 million of the country's children
            aged 5-14 years are not in school.
          </p>
        </div>
        <div className="potential__card">
          <div className="chess__icon">
            <FaChessPawn size={30}/>
          </div>
          <p>
            According to the Harmonized Nigeria Living Standard Survey (HNLSS),
            70% of Nigerian children live in poverty (23% of which is classified
            as extreme poverty).
          </p>
        </div>
      </section>
        <Button text={'Learn more'}/>
    </article>
  );
};

export default Potential;
