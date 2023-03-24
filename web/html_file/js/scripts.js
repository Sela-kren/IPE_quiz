const typingText = document.querySelector(".typing-text p");

let charIndex = mistake =isTyping=0;
let timer,
maxTime = 60;
timeLeft = maxTime;

wpmTag = document.querySelector(".wpm span");
cpmTag = document.querySelector(".cpm span");
mistakeTag = document.querySelector(".mistake span");
timeTag = document.querySelector(".time b")
tryAgainBtn = document.querySelector("button")

inpField = document.querySelector(".wrapper .input-field")
function randomParagraph(){
    let ranIndex = Math.floor(Math.random() * paragraphs.length);
    typingText.innerHTML = "";
    paragraphs[ranIndex].split("").forEach(span =>{
        let spanTag =`<span>${span}</span>`;
        typingText.innerHTML += spanTag;
    });
    typingText.querySelectorAll("span")[0].classList.add("active");    
    document.addEventListener("keydown", ()=> inpField.focus());
    typingText.addEventListener("click", ()=> inpField.focus());

}


function initTyping(){
    const characters = typingText.querySelectorAll("span");
    let typedChar = inpField.value.split("")[charIndex];

    console.log(characters);
    console.log(typedChar);
    if(charIndex < characters.length-1&& timeLeft>0){
       
        
        if(!isTyping){
            
            timer = setInterval(initTimer , 1000);
            isTyping = true;
        }
        
    
        if(typedChar == null){
            charIndex--;
             if(characters[charIndex].classList.contains("incorrect")){
                    mistake--;
    
        
             }
            characters[charIndex].classList.remove("correct","incorrect");
        }else{
            if(characters[charIndex].innerText === typedChar){
                characters[charIndex].classList.add("correct");
        
            }else{
                mistake++;
                characters[charIndex].classList.add("incorrect");
            }   
            charIndex++;
        }
        
        characters.forEach(span => span.classList.remove("active"));
        characters[charIndex].classList.add("active");
    
    
        let wpm = Math.round((((charIndex-mistake)/5)/(maxTime -timeLeft))*60);
        wpm = wpm  <0||!wpm||wpm===Infinity ? 0: wpm;
        mistakeTag.innerText = mistake;
        wpmTag.innerText = wpm;
        cpmTag.innerText = charIndex - mistake;

    }else{
        inpField.value ="";
        clearInterval(timer);
    }
}

function initTimer(){
    if(timeLeft>0){
        timeLeft--;
        timeTag.innerText = timeLeft;
    }else{
        clearInterval(timer);
    }
}

function resetgame(){
    randomParagraph();    
    maxTime = 60;
    timeLeft = maxTime;
    timeTag.innerText = timeLeft;
    charIndex = mistake =isTyping=0;
    mistakeTag.innerText = mistake;
        wpmTag.innerText = 0;
        cpmTag.innerText = 0;
}

randomParagraph();

inpField.addEventListener("input",  initTyping);
tryAgainBtn.addEventListener("click",  resetgame);