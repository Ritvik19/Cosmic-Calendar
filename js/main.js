// active on click
var UnorderedList = document.getElementsByTagName("ul")[0];
var ListElements = UnorderedList.getElementsByTagName("a");

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
        $("aside")[0].style.height = "auto";
        $("aside")[0].style.overflowY = "visible";
        for (var i = 0; i < ListElements.length; i++)
            ListElements[i].classList.remove("mystyle");
        // $("body").style.height = "auto";
    } else {
        $(".collection-container").show();
        $("#mob").hide();
        $("main")[0].style.height = "100vh";
        $("main")[0].style.overflowY = "scroll";
        $("aside")[0].style.height = "100vh";
        $("aside")[0].style.overflowY = "scroll";
        // $("body").style.height = "98vh";
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

// data
$.getJSON("data/01.json", function(json) {
    contents = "";
    for (i = 0; i < json.Date.length; i++) {
        contents +=
            "<tr> <td>" +
            json.Date[i] +
            "</td> <td>" +
            json.YearsAgo[i] +
            "</td> <td>" +
            json.Event[i] +
            "</td> </tr>";
    }
    document
        .getElementById("d01")
        .getElementsByTagName("table")[0]
        .getElementsByTagName("tbody")[0].innerHTML = contents;
});

$.getJSON("data/02.json", function(json) {
    contents = "";
    for (i = 0; i < json.Date.length; i++) {
        contents +=
            "<tr> <td>" +
            json.Date[i] +
            "</td> <td>" +
            json.YearsAgo[i] +
            "</td> <td>" +
            json.Event[i] +
            "</td> </tr>";
    }
    document
        .getElementById("d02")
        .getElementsByTagName("table")[0]
        .getElementsByTagName("tbody")[0].innerHTML = contents;
});

$.getJSON("data/03.json", function(json) {
    contents = "";
    for (i = 0; i < json.Date.length; i++) {
        contents +=
            "<tr> <td>" +
            json.Date[i] +
            "</td> <td>" +
            json.YearsAgo[i] +
            "</td> <td>" +
            json.Event[i] +
            "</td> </tr>";
    }
    document
        .getElementById("d03")
        .getElementsByTagName("table")[0]
        .getElementsByTagName("tbody")[0].innerHTML = contents;
});

$.getJSON("data/04.json", function(json) {
    contents = "";
    for (i = 0; i < json.Date.length; i++) {
        contents +=
            "<tr> <td>" +
            json.Date[i] +
            "</td> <td>" +
            json.YearsAgo[i] +
            "</td> <td>" +
            json.Event[i] +
            "</td> </tr>";
    }
    document
        .getElementById("d04")
        .getElementsByTagName("table")[0]
        .getElementsByTagName("tbody")[0].innerHTML = contents;
});

$.getJSON("data/05.json", function(json) {
    contents = "";
    for (i = 0; i < json.Date.length; i++) {
        contents +=
            "<tr> <td>" +
            json.Date[i] +
            "</td> <td>" +
            json.YearsAgo[i] +
            "</td> <td>" +
            json.Event[i] +
            "</td> </tr>";
    }
    document
        .getElementById("d05")
        .getElementsByTagName("table")[0]
        .getElementsByTagName("tbody")[0].innerHTML = contents;
});

$.getJSON("data/06.json", function(json) {
    contents = "";
    for (i = 0; i < json.Date.length; i++) {
        contents +=
            "<tr> <td>" +
            json.Date[i] +
            "</td> <td>" +
            json.Years[i] +
            "</td> <td>" +
            json.Event[i] +
            "</td> </tr>";
    }
    document
        .getElementById("d06")
        .getElementsByTagName("table")[0]
        .getElementsByTagName("tbody")[0].innerHTML = contents;
});

$.getJSON("data/07.json", function(json) {
    contents = "";
    for (i = 0; i < json.Date.length; i++) {
        contents +=
            "<tr> <td>" +
            json.Date[i] +
            "</td> <td>" +
            json.Years[i] +
            "</td> <td>" +
            json.Event[i] +
            "</td> </tr>";
    }
    document
        .getElementById("d07")
        .getElementsByTagName("table")[0]
        .getElementsByTagName("tbody")[0].innerHTML = contents;
});