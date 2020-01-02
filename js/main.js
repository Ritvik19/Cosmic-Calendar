$(document).ready(function() {
    $('.sidenav').sidenav();
});

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

data = [data1, data2, data3, data4, data5, data6, data7]

for (idx = 1; idx <= 7; idx++) {
    json = data[idx - 1];
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
        .getElementById("d-0" + idx)
        .getElementsByTagName("table")[0]
        .getElementsByTagName("tbody")[0].innerHTML = contents;
}