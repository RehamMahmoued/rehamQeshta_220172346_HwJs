const RehamHw = require('./hw.json');

//all data 
//console.log(RehamHw);
//All batter types 
function batter_type(){
    for (let r =0; r <=RehamHw.length; r++){
        for (let m =0; b <=RehamHw[r].batters.length; m++) {
        console.log ("All batter types" + RehamHw[r].batters[m].batter.type +"is:" + RehamHw[r].batters.batter[r].type) ;
           
        }

    }
}
function topping_type(){
    for (let r =0 ; r <=RehamHw.length ; r++){
        for (let m =0 ; b <=RehamHw[r].topping.length ; m++) {
           console.log ("All topping types" + RehamHw[r].topping[m].type + "is:" + RehamHw[r].topping[r].type) ;

        }

    }
}

function batter_id(){
    for (let r =0 ; r <=RehamHw.length ; r++){
        for (let m =0 ; b <=RehamHw[r].batters.length ; m++) {
           console.log ("id batter " +RehamHw[r].batters[m].batter.type +"is:" + RehamHw[r].batters.batter[r].id) ;

        }

    }
}
function topping_id(){
    for (let r =0 ; r <=RehamHw.length ; r++){
        for (let m =0 ; b <=RehamHw[r].topping.length ; m++) {
           console.log ("id topping " + RehamHw[r].topping[m].type + "is:" + RehamHw[r].topping[r].id ) ;

        }

    }
}
function sum_ppu(){
    for (let r =0 ; r <=RehamHw.length ; r++){
        let sum = sum+RehamHw[r].ppu;
        console.log ("sum:"+sum ) ;

    }  

}
function avg_ppu(){
    for (let r =0 ; r <=RehamHw.length ; r++){
         sum = sum+RehamHw[r].ppu;
        console.log ("avg ppu"+sum/RehamHw.length ) ;

    }  
}
avg_ppu();

