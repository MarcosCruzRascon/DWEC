/**
 1. Un numero positivo o negativo
2. codigo postal (0[1-9]|[1-4]\d|5[0-2])\d{3} ------ ^(0[1-9]|[1-4]\d|5[0-2])\d{3}
3. numero de cuenta bancaria
4. tarjeta de credito
5. codigo de barras EAN8, EAN13
6. matricula (xxxxxx-M, M-XXXX-AB, XXXX ABC)

/[A-Z]{1-2}[  \-][1-9][0-9]{0,5}|
    \d{4}[ \-][BCDFGHJKLMNPRSTVWXYZ]{3}|
    [A-Z]{1,2}[ \]\d{4}[ \-][A-Z]{1,2}


7. IP
8. MAC/^(([0-9A-F]{2}-){5}[0-9A-F]{2}|([0-9A-F]{2}:){5}[0-9A-F]{2})$/ig)
9. direccion web
10. email
11. temperatura en grados celsius y ºf
12. Aula del instituto(PLANTACLASEEDIFICIO, PLANTA 2 CLASE 1 EDIFICIO B, 21B)
13. Coordenadas gps
14. telefono
15. isbn
16. nombre persona
17. IMEI
 */