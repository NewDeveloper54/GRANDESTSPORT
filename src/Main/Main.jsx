import React, { useState, useEffect } from "react";
import "./Main.css";
import Notaire from "../assets/logoNotaire.png";
import mp44 from "../assets/mp44.png";
import donation from "../assets/acteDonation.png";
import immobilierNotaire from "../assets/immobilierNotaire.png";
import successionNotaire from "../assets/successionNotaire.png";
import entreprise from "../assets/entreprise.png";
import GES from "../assets/GES.svg";
import acces from "../assets/acces3.png";
import telephoner from "../assets/appel.png";
import domicile from "../assets/house.png";

const Main = () => {
  const [animationDone, setAnimationDone] = useState(false);
  const [sectionTwoShowed, setSectionTwoShowed] = useState(false);
  const [NotaireShow, setNotaireShow] = useState(false);
  const [img2, setImg2] = useState(false);


 useEffect(()=>{
  const timer  =setTimeout(()=>{
    setImg2(true);
  },2500);
 }, []);


  useEffect(() => {
    const timer = setTimeout(() => {
      setNotaireShow(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

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
        <div className="upper">
          <div className="NotaireImg">
            <img
              width="180"
              height="170"
              src={GES}
              alt="nothing yet"
              className={animationDone ? "logoAnimate" : "logoHold"}
            />
          </div>

          <div className={`byMp44 ${NotaireShow ? "show" : ""}`}>
            <p>by</p>



            <img src={mp44} height="80" width="80" alt="" />
          </div>
        </div>
      </section>

      <section className={`sectionTwo ${sectionTwoShowed ? "show" : ""}`}>

        <div className="elements">


          <div className="priority">

          
          <a href="https://www.grandest.fr/decouvrir-richesses/offre-sportive/">
            <div className="item one">
            { /* <img src={acces} height="150" width="160" alt="" />   */ }
              <h1>OFFRE SPORTIVE</h1>
            </div>
          </a>

          </div>


          <div className="secondary">

          <a
            href="https://www.grandest.fr/contact/"
            rel="noopener noreferrer"
          >
            <div className="item two">
              <img src={telephoner} alt="" height="100" width="100" />
              <h1 className="angled-shadow">CONTACT</h1>
            </div>
          </a>

          <a href="https://www.grandest.fr/wp-content/uploads/2025/01/tomblaine.pdf">
            <div className="item three">
              <img src={acces} alt="" height="140" width="150" />
              <h1>PLAN D'ACCES </h1>
            </div>
          </a>

          <a
            href="https://www.grandest.fr/fonctionnement-de-la-region/les-maisons-de-la-region/#flex_image__video"
            rel="noopener noreferrer"
          >
            <div className="item four">
              <img src={domicile} alt="" height="100" width="100" />
              <h1 className="angled-shadow">MES MAISONS DE LA REGION</h1>
            </div>
          </a>
          </div>

        </div>

{/*

        <a href="https://immobiliere-des-etudes.fr/marketplace"> 
          <div className="button">
            <button>Trouver mon bien</button>
          </div>
        </a>  */ }
      </section>


      



      <div className="outerbox1"></div>
      <div className="outerbox2"></div>
      <img
              width="615"
              height="200"
              src={GES}
              alt="nothing yet"
              className={`img2 ${img2 ? "goUp" : ""} `}
            />




    </div>
  );
};

export default Main;
