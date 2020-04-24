var api_url = "https://script.google.com/macros/s/AKfycbx5YGfVuISgCM8-yV1Rqv7usU2twXYL4WSx3GrNVvP6oKJCRW8/exec";

$(document).ready(function () {

    // textbox support press enter
    $('#idInput').keypress(function (e) {
        if (e.keyCode == 13)
            $('#searchBtn').click();
    });

    // searchBtn click event
    $("#searchBtn").on('click', function () {
        var id = $("#idInput").val();
        //        console.log(id);
        $("#status").show();
        $("#success").hide();
        $("#secondary").hide();
        $("#refused").hide();
        $("#error").hide();
        if (id == "") {
            $("#notfound").fadeIn();
            $("#loading").hide();
        } else {
            $("#notfound").hide();
            $("#loading").fadeIn();
            search(id);
        }
    });

});

function search(id) {
    $.getJSON(api_url, {
            id: id
        })
        .done(function (data) {
            console.log(data);
            $("#loading").hide();
            if (data.Status.includes("已出貨")) {
                $("#success .id").text(data.ID);
                $("#success .status").text(data.Status);
                $("#success").fadeIn();
            } else if (data.Status.includes("預計")) {
                $("#secondary .id").text(data.ID);
                $("#secondary .status").text(data.Status);
                $("#secondary").fadeIn();
            } else if (data.Status.includes("客服")) {
                $("#refused .status").text(data.Status);
                $("#refused").fadeIn();
            } else if (data.Status.includes("N/A")) {
                $("#notfound").fadeIn();
            } else {
                $("#error").fadeIn();
            }

        })
        .fail(function (jqxhr, textStatus, error) {
            var err = textStatus + ", " + error;
            console.log("Request Failed: " + err);
            $("#loading").hide();
            $("#error").fadeIn();
        });
}
