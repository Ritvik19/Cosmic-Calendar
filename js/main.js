// active on click
var UnorderedList = document.getElementsByTagName("ul")[0];
var ListElements = UnorderedList.getElementsByTagName("a");

for (var i = 0; i < ListElements.length; i++) {
    ListElements[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

//smooth scroll
$(document).ready(function() {
    $("a").on("click", function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $("html, body").animate({
                    scrollTop: $(hash).offset().top
                },
                800,
                function() {
                    window.location.hash = hash;
                }
            );
        }
    });
});

// window resizing
function windowResizeFunction() {
    if (screen.width < 600) {
        $(".collection-container").hide();
        $("#mob").show();
        $("main")[0].style.height = "auto";
        $("main")[0].style.overflowY = "visible";
        for (var i = 0; i < ListElements.length; i++)
            ListElements[i].classList.remove("mystyle");
    } else {
        $(".collection-container").show();
        $("#mob").hide();
        $("main")[0].style.height = "100vh";
        $("main")[0].style.overflowY = "scroll";
    }
}

$("#mob").click(function() {
    $(".collection-container").toggle(1000);
});

window.addEventListener("resize", windowResizeFunction);
windowResizeFunction();

// sticky menu
function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $("#sticky-anchor").offset().top;
    if (window_top > div_top) {
        $("#sticky").addClass("stick");
    } else {
        $("#sticky").removeClass("stick");
    }
}

$(function() {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
});