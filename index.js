for(var i = 0 ; i < document.querySelectorAll(".drum").length ; i++){
document.querySelectorAll(".drum")[i].addEventListener("click" , function(){
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
});
}
document.addEventListener("keypress" , function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});
function makeSound(key){
    switch(key){
        case  "w" :
            var stick = new Audio("sounds1/stick.mp3");
            stick.play();
            break;
        case  "a" :
            var thud = new Audio("sounds1/thud.mp3");
            thud.play();
            break;
        case  "s" :
            var left = new Audio("sounds1/left.mp3");
            left.play();
            break;
        case  "d" :
            var orch = new Audio("sounds1/orch.mp3");
            orch.play();
            break;
        case  "j" :
            var reverse = new Audio("sounds1/reverse.mp3");
            reverse.play();
            break;
        case  "k" :
            var rock = new Audio("sounds1/rock.mp3");
            rock.play();
            break;
        case  "l" :
            var slow = new Audio("sounds1/slow.mp3");
            slow.play();
            break;
        case  "f" :
            var solo = new Audio("sounds1/solo.mp3");
            solo.play();
            break;
        case  "g" :
            var you = new Audio("sounds1/you.mp3");
            you.play();
            break;
        case  "h" :
            var cow = new Audio("sounds1/cow.mp3");
            cow.play();
            break;
    }
}
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}