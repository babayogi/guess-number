'use strict';
let random=Math.ceil(Math.random() * 20)
let score=20;
let highscore=0;
console.log(random); 

const dispMsg=function(message){
    document.querySelector(".message").textContent=message;    
}


document.querySelector(".check").addEventListener("click",function(){
    let guess=document.querySelector(".guess").value;
    if(guess==random){
        // document.querySelector(".message").textContent="correct number"
        dispMsg("correct number");
        document.querySelector(".number").textContent=random
        document.body.style.backgroundColor="green"
        

        if(score>highscore){
            highscore=score
            document.querySelector(".highscore").textContent=highscore
        }
    }
        else if(document.querySelector(".guess").value!=random){
            if(score>0){ 
                // document.querySelector(".message").textContent= guess>random ?"too high":"low";
                dispMsg(guess>random ?"too high":"low")
                score--;
                document.querySelector(".score").textContent=score
        }
            else{
                document.body.style.backgroundColor="red"
                // document.querySelector(".message").textContent="Game OVER!!!!!!" 
                dispMsg("GAME oVER")
        }
    }
    // else if(document.querySelector(".guess").value>random){    
    //     if(score>0){ 
    //         document.querySelector(".message").textContent="too high"
    //         score--;
    //         document.querySelector(".score").textContent=score
    //     }
    //     else{
    //         document.body.style.backgroundColor="red"
    //         document.querySelector(".message").textContent="Game OVER!!!!!!" 
    //     }
    // }    
    // else{
    //     if(score>0){
    //         document.querySelector(".message").textContent="too low" 
    //         score--;   
    //         document.querySelector(".score").textContent=score;
    //     }
    //     else{
    //         document.body.style.backgroundColor="red"
    //         document.querySelector(".message").textContent="Game OVER!!!!!!" 
    //     }
    // }    
    
})

document.querySelector(".again").addEventListener("click",function(){
    score=20;
    document.querySelector(".score").textContent=score;
    random=Math.ceil(Math.random() * 20);  
    document.body.style.backgroundColor="#222"  
    // document.querySelector(".message").textContent="start Guessing!!!!!"
    dispMsg("start guessing")
    document.querySelector(".number").textContent="?"
    document.querySelector(".guess").value=" "
    console.log(random);

})

