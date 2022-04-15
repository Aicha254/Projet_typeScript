


import { Stagiaire} from "../Aissata-Ba/Stagiaire";

//  ====================== creation de la classe Formation =======================

 export class Formation{
    _intitule: string;
    _nbrJours: number;
    _stagiaire:  [{val1:10,val2:20}];

    //  ================== creation du constructeur ===========================

    constructor(intitule:string, nbrJours:number, stagiaire:any){
        this._intitule = intitule;
        this._nbrJours = nbrJours;
        this._stagiaire = stagiaire;
    }

    // ====================== creation des getters et setters ===================
    public get intitule(): string{
        return this.intitule;
    }
    public set intitule(n :string) {
        this.intitule = n;
    }

    public get nbrJours(): number{
        return this.nbrJours;
    }
    public set nbrJours(n :number) {
        this.nbrJours = n;
    }

    public get stagiaire(): {} {
        return this.stagiaire;
    }
    public set stagiaire(n :{}) {
        this.stagiaire = n;
    }


    // ======================== calcul moyenneFormation ========================
    
    public calculerMoyenneFormation():number{
        let moyenne :number = 0;
        let somme :any;
        for( let i = 0; i <= this._stagiaire.length; i++){
            somme += this._stagiaire[i];
        }
        moyenne = somme / this._stagiaire.length;
        return moyenne;       
    }
    
}


