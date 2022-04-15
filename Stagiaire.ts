
//  ====================== creation de la classe Stagiaire =======================
   export class Stagiaire {
    private _nom: string = "aicha";
    private _note: number[] = [10, 12];

      //  ================== creation du constructeur ===========================

    constructor(nom:string, note:number[]){
        this._nom = nom;
        this._note = note;
    }

    // ====================== creation des getters et setters ===================

    public get nom():string{
        return this._nom;
    }
    
    public set nom(n :string) {
        this._nom = n;
    }

    public get notes(){
        return this._note;
    }
    public set note(n:[]){
        this._note = n;
    }   
    
    // ================ Attribut calculer moyenne ==============
    public calculerMoyenne(_note:number[]){
        let moyenne :number = 0;
        let somme :number = 0;
        for( let i = 0; i <= this._note.length; i++){
            somme += this._note[i];
        }
        moyenne = somme / this._note.length;
        return moyenne;       
    }
    //  ================== methode Max ========================
    public trouverMax(){
        let max :number = 0;
        let n :number;
        for( let i = 0; i <= this._note.length; i++){
            if(this._note.length > max){
                return max;
            }
        } 
        console.log(this.trouverMax);       
    } 
    // ====================== methode Min =====================

    public trouverMin(){
        let min :number = 0;
        let n :number;
        for( let i = 0; i <= this._note.length; i++){
            if(this._note.length < min){
                return min;
            }
        } 
        console.log(this.trouverMin);       
    } 
     
}
  












