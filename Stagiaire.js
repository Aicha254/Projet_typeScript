"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stagiaire = void 0;
var Stagiaire = /** @class */ (function () {
    function Stagiaire(nom, note) {
        this._nom = "aicha";
        this._note = [10, 12];
        this._nom = nom;
        this._note = note;
    }
    Object.defineProperty(Stagiaire.prototype, "nom", {
        // ============ getteur et setteurs de nom ==================
        get: function () {
            return this._nom;
        },
        set: function (n) {
            this._nom = n;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Stagiaire.prototype, "notes", {
        // ============== getteur et setteur de note =====================
        get: function () {
            return this._note;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Stagiaire.prototype, "note", {
        set: function (n) {
            this._note = n;
        },
        enumerable: false,
        configurable: true
    });
    // ================ Attribut calculer moyenne ==============
    Stagiaire.prototype.calculerMoyenne = function (_note) {
        var moyenne = 0;
        var somme = 0;
        for (var i = 0; i <= this._note.length; i++) {
            somme += this._note[i];
        }
        moyenne = somme / this._note.length;
        return moyenne;
    };
    //  ================== methode Max ========================
    Stagiaire.prototype.trouverMax = function () {
        var max = 0;
        var n;
        for (var i = 0; i <= this._note.length; i++) {
            if (this._note.length > max) {
                return max;
            }
        }
        console.log(this.trouverMax);
    };
    // ====================== methode Min =====================
    Stagiaire.prototype.trouverMin = function () {
        var min = 0;
        var n;
        for (var i = 0; i <= this._note.length; i++) {
            if (this._note.length < min) {
                return min;
            }
        }
        console.log(this.trouverMin);
    };
    return Stagiaire;
}());
exports.Stagiaire = Stagiaire;
