var BASE_URL = "http://localhost:8080/jaxrs-images/api/";

onload = function() {
    loadImageSelect();
    $("#download").click(downloadSelectedImage);
};

function loadImageSelect() {
    $("#images").empty();
    
    var request = new XMLHttpRequest();
    request.open("GET", BASE_URL + "images");
    request.onload = function() {
        if (request.status === 200) {
            var results = JSON.parse(request.responseText);
            for (var i = 0; i < results.length; i++) {
                var option = $("<option>").attr("value", results[i]).text(results[i]);
                $("#images").append(option);
            }
        } else {
            console.log("Cannot load images: " + request.status + " - " + request.responseText);
        }
    };
    request.send(null);
}

function downloadSelectedImage() {
    $("img").remove();
    var file = $("#images").val();  
    var img = $("<img>").attr("src", BASE_URL + "images/" + file).attr("alt", "Your downloaded images");
    $("body").append(img);
}