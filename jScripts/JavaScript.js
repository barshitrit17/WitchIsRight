(function ()
{
    // how to play click
    var HowToPlayElement = window.document.getElementsByClassName("howToPlay")[0];
    HowToPlayElement.onclick = function () {
        window.document.getElementsByClassName("FinalHowToPlayAnimationWrapper")[0].style.display = "block";
    }

    // about click
    var aboutElement = window.document.getElementsByClassName("about")[0];
    aboutElement.onclick = function () {
        window.document.getElementsByClassName("aboutImageWrapper")[0].style.display = "block";
    }

    // close click
    var closeButtonElements = window.document.getElementsByClassName("closeButton");
    for (var i = 0; i < closeButtonElements.length; i++) {
        closeButtonElements[i].onclick = function () {
            window.document.getElementsByClassName("FinalHowToPlayAnimationWrapper")[0].style.display = "none";
            window.document.getElementsByClassName("aboutImageWrapper")[0].style.display = "none";
        }
    }

    // editor click
    var editorElement = window.document.getElementsByClassName("editor")[0];
    editorElement.onclick = function () {
        var ourGame = window.document.getElementById("ourGame");
        ourGame.src = "https://anittamali.github.io/WitchIsRightGame/witch_is_right.html";
    }

    var ourGame = window.document.getElementById("ourGame");
    ourGame.onload = function () {
        var onLoad = window.document.getElementsByClassName("onLoad")[0];
        onLoad.style.display = "none";
    }
})();