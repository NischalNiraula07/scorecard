let addOne=document.getElementById("add-1")
let addTwo=document.getElementById("add-2")
let addThree=document.getElementById("add-3")
let homeScore=document.getElementById('homescore-el')
let guestScore=document.getElementById('guestscore-el')

let homeCount = 0
let guestCount = 0

function add1Home(){
    
    homeCount+=1
    homeScore.textContent=homeCount

    }


function add2Home(){
    homeCount+=2
    homeScore.textContent=homeCount
    }
    
    
 function add3Home(){
    homeCount+=3
    homeScore.textContent=homeCount
    }
    
    
 function add1Guest(){
    guestCount+=1
    guestScore.textContent=guestCount
    
    }


function add2Guest(){
    guestCount+=2
    guestScore.textContent=guestCount
    }
    
    
 function add3Guest(){
    guestCount+=3
    guestScore.textContent=guestCount
    }
    

    

