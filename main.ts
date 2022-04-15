import { Stagiaire } from "../Aissata-Ba/Stagiaire.js";
 let stagiaire = new  Stagiaire("aicha",[10,20]);
 console.log(stagiaire.calculerMoyenne);
 console.log(stagiaire.trouverMax);
 console.log(stagiaire.trouverMin);

 import { Formation } from "../Aissata-Ba/Formation.js";
 let formation = new Formation("intitule",10,[10,20]);
 console.log(formation.calculerMoyenneFormation);