var character = document.getElementById('character');
var block = document.getElementById('block');
var counter = 0;
function jump() {
    if(character.classList != 'animate') {
    character.classList.add('animate');
    }
    setTimeout(function(){
        character.classList.remove('animate');
        counter++;
    },500);
}

var checkDead = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).
    getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).
    getPropertyValue("left"));
    if(blockLeft<25 && blockLeft>0 && characterTop >= 130) {
        block.style.animation = 'none';
        block.style.display = 'none';
        alert('You Got Hit! Better Luck Next Time!');
    }
},10);