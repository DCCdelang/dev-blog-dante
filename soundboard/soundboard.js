console.log("hello")

var sounds = [ 
    { fl: "unknown.mp3", nm:"No sound yet"},
    ]

function add_button(snd) {
    var button = document.createElement("button");
    button.innerHTML = snd.nm;
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(button);
    body.appendChild(document.createElement("br"));
    button.addEventListener ("click", function() {
        var audio = new Audio(snd.fl);
        audio.play();
    });
}

sounds.forEach(function(sound) {
    add_button(sound);
}, this);