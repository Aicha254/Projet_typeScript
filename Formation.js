"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Formation = void 0;
var Formation = /** @class */ (function () {
    function Formation(intitule, nbrJours, stagiaire) {
        this._intitule = intitule;
        this._nbrJours = nbrJours;
        this._stagiaire = stagiaire;
    }
    Object.defineProperty(Formation.prototype, "intitule", {
        get: function () {
            return this.intitule;
        },
        set: function (n) {
            this.intitule = n;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Formation.prototype, "nbrJours", {
        get: function () {
            return this.nbrJours;
        },
        set: function (n) {
            this.nbrJours = n;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Formation.prototype, "stagiaire", {
        get: function () {
            return this.stagiaire;
        },
        set: function (n) {
            this.stagiaire = n;
        },
        enumerable: false,
        configurable: true
    });
    Formation.prototype.calculerMoyenneFormation = function () {
        var moyenne = 0;
        var somme;
        for (var i = 0; i <= this._stagiaire.length; i++) {
            somme = this._stagiaire[i];
        }
        moyenne = somme / this._stagiaire.length;
        return moyenne;
    };
    return Formation;
}());
exports.Formation = Formation;
