$(document).ready(function() {
    $("thead").eq(0).css({
        "color": "white",
        "font-size": "1.5,",
        "background-color": "gray"
    });

    $("tbody tr:odd").css({ "background-color": "lightgray" })
    $("tbody td").click(function() {

        /* if ($(this).css("color") === "rgb(0, 0, 0)") {
             $(this).css("color", "red")
         } else {
             $(this).css("color", "black")
         }*/
        /*if ($(this).text() != "") {
            var input = $("<input>").attr("type", "text").val($(this).text());
            $(this).empty().append(input);
            input.focus();
            input.blur(function() {
                $(this).parent().html($(this).val());
            })
        }*/
    })



    $("tbody tr").dblclick(function() {
        $(this).hide();
    })
    $("thead").dblclick(function() {
        $(this).parent().find("tbody tr").show();
    })

    $("tbody tr").click(function() {
        $(this).children().css("background-color", "blue");
        $(this).prevAll().children().css("background-color", "red");
        $(this).nextAll().children().css("background-color", "green")
    })

    $("button").click(function() {
        var div = $("<div>");
        var span = $("<span>");
        $(div).append(span);
        $(this).parent().append(div);
        $(span).text("X");

        $("div").css({
            "z-index": 999,
            "position": "fixed",
            "background-color": "black",
            "opacity": 0.8,
            "height": "100%",
            "width": "100%",
            "left": 0,
            "top": 0
        }).appendTo($(this).parent());


        $("span").css({
            "color": "white",
            "font-size": "200%",
            "position": "fixed",
            "right": 20,
            "top": 0
        })

        $("span").click(function() {
            $("span").parent().remove();
        })
    })

})