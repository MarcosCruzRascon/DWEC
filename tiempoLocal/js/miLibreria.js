$(document).ready(function() {
    var ip;
    $.getJSON("https://api.ipify.org/?format=json", function(data) {
        ip = data.ip;
        console.log(ip)
        $.get("http://ip-api.com/json/" + ip,
            function(datos, textStatus, jqXHR) {

                $.get('http://api.openweathermap.org/data/2.5/weather?q=' + datos.city + '&appid=b3676cc2d3ff6882da6e68b52ec54e7c',
                    function(data, textStatus, jqXHR) {
                        console.log(data)
                    }
                );
            });
    });
});