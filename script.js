var audio=document.createElement('audio');
var first=true;
window.addEventListener('mousedown',onmousedown);

function onmousedown(){
    if(!first) return;
    first=false;
    audio.src="medias/theme.mp3";
    //audio.controls=true;
    audio.play();
}


$(function() {
    var Sectionbvn = $('.section-bvn'),
    Bouton = Sectionbvn.find('.Bouton');


    setTimeout(function() {
        Sectionbvn.removeClass('contenue-cacher');
    },800);
    
   
    
 });    