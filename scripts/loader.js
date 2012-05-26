var jewel = {};

window.addEventListener("load", function() {
    Modernizr.load([
        {
            load: [
                "scripts/sizzle.js",
                "scripts/dom.js",
                "scripts/game.js",
            ],
            complete: function() {
                //all files loaded
            }
        }
    ]);
}, false);