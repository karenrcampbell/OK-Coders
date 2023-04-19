var numberOfBottles = prompt("How Many Bottles of Beer on the Wall?");
var songLyric = numberOfBottles + " Bottles of Beer On The Wall";
var pMessageTag = document.getElementById("song-lyric"); pMessageTag.textContent= songLyric;

const takeOneDownButton = document.getElementById("take-one-down-button");
takeOneDownButton.addEventListener("click", takeOneDown);

var stringToNumber = numberOfBottles/1;

function takeOneDown () {
    var finalLyric = --stringToNumber + " Bottles of Beer On The Wall";
    pMessageTag.textContent = finalLyric;
    }
     






