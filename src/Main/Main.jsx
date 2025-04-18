import React, { useState, useEffect } from "react";
import "./Main.css";
import OHS from "../assets/logo-site.png";

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
          src={OHS}
          alt="nothing yet"
          className={animationDone ? "logoAnimate" : "logoHold"}
        />
      </section>

      <section className={`sectionTwo ${sectionTwoShowed ? "show" : ""}`}>
          <a href="http://ohs-solutions.fr/accueil/mes-services-ohs/">
            <div className="item">
              <h2>MES SERVICES OHS</h2>
            </div>
          </a>

          <a href="">
            <div className="item">
              <h2>CONTACT</h2>
            </div>
          </a>

          <a href="">
            <div className="item">
              <h2>NOS DEPARTEMENTS</h2>
            </div>
          </a>
      </section>
    </div>
  );
};

export default Main;
