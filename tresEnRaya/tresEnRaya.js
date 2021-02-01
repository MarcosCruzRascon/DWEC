window.addEventListener("load", function() {

    function victoria(piezas) {
        var victoria = false;
        for (let i = 0; i < 3; i++) {
            if (piezas[i][0] != "" && piezas[i][0] == piezas[i][1] && piezas[i][0] == piezas[i][2])
                victoria = true;
        }

        for (let i = 0; i < 3; i++) {
            if (piezas[i][0] != "" && piezas[0][i] == piezas[1][i] && piezas[0][i] == piezas[2][i])
                victoria = true;
        }

        for (let i = 0; i < 3; i++) {
            if (piezas[1][1] != "" && piezas[0][0] == piezas[1][1] && piezas[0][0] == piezas[2][2])
                victoria = true;
        }

        for (let i = 0; i < 3; i++) {
            if (piezas[1][1] != "" && piezas[0][2] == piezas[1][1] && piezas[0][2] == piezas[2][0])
                victoria = true;
        }

        return victoria;
    }

    var tds = document.getElementsByTagName("td");
    var piezas = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];
    for (let i = 0; i < tds.length; i++) {
        tds[i].fila = parseInt(i / 3);
        tds[i].columna = i % 3;
        tds[i].addEventListener("click", function() {
            if (this.innerHTML == "") {
                this.innerHTML = "X";
                piezas[this.fila][this.columna] = "X";
                if (victoria(piezas)) {
                    alert("Ganaste")
                } else {
                    var posibles = document.querySelectorAll("td:empty");
                    if (posibles.length > 0) {
                        var juegaMaquina = parseInt(Math.random() * posibles.length);
                        posibles[juegaMaquina].innerHTML = "O";
                        piezas[posibles[juegaMaquina].fila][posibles[juegaMaquina].columna] = "O";
                        if (victoria(piezas)) {
                            alert("Perdiste")
                            piezas = [
                                ["", "", ""],
                                ["", "", ""],
                                ["", "", ""]
                            ];
                        }
                    }
                }

            }
        })

    }
})