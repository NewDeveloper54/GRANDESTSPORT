import React, { useState, useEffect } from "react";
import "./Main.css";
import Notaire from "../assets/logoNotaire.png";
import mp44 from "../assets/mp44.png";
import donation from "../assets/acteDonation.png";
import notaire from "../assets/notaire.png";
import territoriale from "../assets/territoriale.png";
import immobilierNotaire from "../assets/immobilierNotaire.png";
import successionNotaire from "../assets/successionNotaire.png";
import entreprise from "../assets/entreprise.png";
import familleNotaire from "../assets/familleNotaire.png";
import formation from "../assets/formation.png";
import reglementationNotaire from "../assets/regleNotaire.png";

const Main = () => {
  const [animationDone, setAnimationDone] = useState(false);
  const [sectionTwoShowed, setSectionTwoShowed] = useState(false);
  const [NotaireShow, setNotaireShow] = useState(false);


  useEffect(()=>{
    const timer = setTimeout(() =>{
      setNotaireShow(true)
    },4000);
    return () => clearTimeout(timer);
  },

[]);

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
            src={Notaire}
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

        <a href="https://www.notaires.fr/fr/donation">
          <div className="item one">
            <img src={donation}
            height="120"
            width="130"
            alt="" />
            <h1>DONATION</h1>
          </div>
        </a>

        <a
          href="https://www.notaires.fr/fr/succession"
          rel="noopener noreferrer"
        >
          <div className="item two">
            <img src={successionNotaire} alt="" 
            height="130"
            width="180"
            />
            <h1 className="angled-shadow">SUCCESSION</h1>
          </div>
        </a>

        <a href="https://www.notaires.fr/fr/immobilier">
          <div className="item three">
            <img src={immobilierNotaire} alt="" 
            height="130"
            width="160"
            />
            <h1>IMMOBILIER</h1>
          </div>
        </a>

        <a
          href="https://www.notaires.fr/fr/entreprise"
          rel="noopener noreferrer"
        >
          <div className="item four">
            <img src={entreprise} alt="" 
            height="130"
            width="100"
            />
            <h1 className="angled-shadow">ENTREPRISE</h1>
          </div>
        </a>

        <a
          href="https://www.notaires.fr/fr/famille"
          rel="noopener noreferrer"
        >
          <div className="item five">
            <img src={familleNotaire} alt="" 
            height ="130"
            width="130"
            />
            <h1 className="angled-shadow">Famille</h1>
          </div>
        </a>


        <a
          href="https://www.notaires.fr/fr/formation-et-emplois"
          rel="noopener noreferrer"
        >
          <div className="item six">
            <img src={formation} alt="" 
            height="130"
            width="130"
            />
            <h1 className="angled-shadow">Formation et emploi</h1>
          </div>
        </a>


        <a
          href="https://www.notaires.fr/fr/collectivites-territoriales"
          rel="noopener noreferrer"
        >
          <div className="item seven">
            <img src={territoriale} alt="" 
            height="200"
            width="150"
            />
            <h1 className="angled-shadow">Collectivités territoriales</h1>
          </div>
        </a>

        <a
          href="https://www.notaires.fr/fr/le-role-du-notaire"
          rel="noopener noreferrer"
        >
          <div className="item eight">
            <img src={notaire} 
            height="180"
            width="130"
            alt="" />
            <h1 className="angled-shadow">rôle du notaire</h1>
          </div>
        </a>


        <a
          href="https://www.csn.notaires.fr/fr/reglement-national-reglement-inter-cours"
          rel="noopener noreferrer"
        >
          <div className="item nine">
            <img src={reglementationNotaire} alt="" 
            height ="170"
            width="170"
            />
            <h1 className="angled-shadow">Réglementation</h1>
          </div>
        </a>

        </div>
<a href="https://immobiliere-des-etudes.fr/marketplace">
        <div className="button">
          <button>Trouver mon bien</button>
        </div>
        </a>

      </section>
    </div>
  );
};

export default Main;
