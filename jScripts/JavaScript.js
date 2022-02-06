(function ()
{
    // how to play click
    var howToPlayElement = window.document.getElementsByClassName("howToPlay")[0];
    howToPlayElement.onclick = function () {
        window.document.getElementsByClassName("howToPlayImage")[0].style.display = "block";
        window.document.getElementsByClassName("closeButton")[0].style.display = "block";
    }

    // about click
    var aboutElement = window.document.getElementsByClassName("about")[0];
    aboutElement.onclick = function () {
        window.document.getElementsByClassName("aboutImage")[0].style.display = "block";
        window.document.getElementsByClassName("closeButton")[0].style.display = "block";
    }

    // close click
    var closeButtonElement = window.document.getElementsByClassName("closeButton")[0];
    closeButtonElement.onclick = function () {
        window.document.getElementsByClassName("howToPlayImage")[0].style.display = "none";
        window.document.getElementsByClassName("aboutImage")[0].style.display = "none";
        window.document.getElementsByClassName("closeButton")[0].style.display = "none";
    }
})();