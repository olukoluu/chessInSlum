import React from "react";
import Button from "../../../UI/button/Button";

import "./hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__text">
        <h5>Chess in slums</h5>
        <h2>Unveiling the King and Queen in every Pawn</h2>
        <h5>We are raising Kings and Queens in the Slums</h5>
      </div>
      <div className="hero__btns">
        <Button text={'SCHOLARSHIP PROGRAM'}/>
        <Button text={'PARTNER WITH US'} />
      </div>
      <footer className="hero__footer">
        <div>
            <h3>3600+</h3>
            <p>Hours of chess training</p>
        </div>
        <div>
            <h3>1000+</h3>
            <p>Children enrolled in CIS initiative</p>
        </div>
        <div>
            <h3>200+</h3>
            <p>Scholarships</p>
        </div>
        <div>
            <h3>86%</h3>
            <p>of kids enrolled in CIS initiative remains in school</p>
        </div>
      </footer>
    </section>
  );
};

export default Hero;
