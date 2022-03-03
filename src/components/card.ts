let firstChoice:Card = {id:'', symbol:''};
let points:number = 0;

class Card {
    id:string = '';
    symbol:string = '';
    isFront:boolean = false;
}

onclick = (element) => {
    let symbol = element.alt;
    turn(element.target.id);
    
    if(firstChoice){
        //if first item is already turned
        if(symbol === firstChoice.symbol){
            // disable
            element.target.disabled = true;
            // add point
            points+=1;
    
            if(points === 10){
                alert('YOU WON')
            }
            firstChoice = {id:'', symbol:''};
        }
        else {
            // turn them back again
            turn(firstChoice.id);
            turn(element.target.id);
        }
    }
    else {
        // assign first choice
        firstChoice.symbol = symbol;
    }
}