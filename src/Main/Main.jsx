import React, { useState, useEffect } from "react";
import "./Main.css";
import OHS from "../assets/ohsFinal.png";

const Main = () => {
  const [animationDone, setAnimationDone] = useState(false);
  const [sectionTwoShowed, setSectionTwoShowed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSectionTwoShowed(true);
    }, 4000); // 2 seconds delay for section two to show

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationDone(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="Main">
      <section className="sectionOne">
        <img
        width="340"
        height="156"
          src={OHS}
          alt="nothing yet"
          className={animationDone ? "logoAnimate" : "logoHold"}
        />
      </section>

      <section className={`sectionTwo ${sectionTwoShowed ? "show" : ""}`}>
          <a href="http://ohs-solutions.fr/accueil/mes-services-ohs/">
            <div className="item">
              <h1>NOS SERVICES OHS</h1>
            </div>
          </a>

          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@ohs-solutions.fr" rel="noopener noreferrer">
  <div className="item">
    <h1 className="angled-shadow">CONTACT</h1>
  </div>
</a>


          <a href="https://www.linkedin.com/company/ohs-de-lorraine/?originalSubdomain=fr">
            <div className="item">
              <h1>SUIVEZ NOUS</h1>
            </div>
          </a>
      </section>
    </div>
  );
};

export default Main;
