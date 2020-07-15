

import { Component, OnInit, NgModule, Query } from '@angular/core';
declare var $: any;
import { Game } from "./Game"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    maxNumberofDice: number;
    constructor() {}
  ngOnInit(): void {
     this.maxNumberofDice= 1;
  }
}

 
  const title = 'TroyJohnson_assign01';
  const maxNumberOfDice = 1; 
let game = new Game(); 
game.rollDice();

let numberOfDice = 1; 
console.log(game);

let $select; 
let $dice; 
let $total; 

let images = [];
for (let i = 1; i <= 1; i++) {
    let image = new Image();
    image.src = dieImageSrc(0);
    images.push(image);
}





function dieImageSrc(side) {
    return `images/side_${images}.png`;
}


function insertImages() {
    for (let die of game.dice) {
        let side = die.side;
        let src = dieImageSrc(images);
        $dice.append(`<img src="${src}" alt="side ${images}">`);
    }
}


function insertSelectOptions() {
    for (let i = 1; i <= maxNumberOfDice; i++) {
        $select.append(`<option value="${i}" ${(i === numberOfDice)?'selected':''}>${i}</option>`);
    }
}


function handleSelectionChanges() {
    $select.change(function () {
        console.log("the change event handler is called");
        let count = parseInt($select.val());
        if (count !== numberOfDice) {
            numberOfDice = count;
            game = new Game(count);
            game.rollDice();
            $dice.html("");
            insertImages();
            updateTotal();
            saveSides(game);
        }
    });
}


function saveSides(game){

}

function updateTotal() {
    $total.text(game.total);
}



function handleRollButtonClicks() {
    $("#roll_button").click(function () {
        console.log("the click event handler is called");
        game.rollDice();
        $dice.find("images").each(function(index){
            let side = game.dice[index].images;
            let src = dieImageSrc(side);
            $(this).attr("src", src).attr("alt", `side ${images}`);
        });
        updateTotal();
        saveSides(game);
    });
}








  







