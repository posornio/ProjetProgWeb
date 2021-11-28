let tableu = [1,2,3,4,5,6,7,8,9];
var croix =[];
var cercle =[]; 
var joueur = 0
let gagnantvert =[1,2,3]
let gagnanthor = [1,4,7]
let gagnant = [[1,2,3],[4,5,6],[7,8,9],[1,4,6],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]
function erruer() {

}

function player (pl){
    if (pl%2==0) {
        return croix
    }
    else return cercle
}

function verif(num,pl){


   
}
function dispo(num){
    if (croix.includes(num) || cercle.includes(num)) {
        return false
    } 
    else return true
}

function ajouter(num, pl){
    if (dispo(num)) {
        player(pl).push(num)
    } else return erreur
    pl=pl+1
    joueur = pl
}

function verifvert(){
    for (i in 3){
        for (j in 3){

        }
    }
}