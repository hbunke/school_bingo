/* Hendrik Bunke, 2018-03-16 */
/* Bingo with subject terms */

"use_strict";

var terms = [
    "Adolf Hitler",
    "NSDAP",
    "Weimarer Republik",
    "30. Januar 1933",
    "SPD",
    "KPD",
    "Goebbels",
    "SA",
    "Hindenburg",
    "Volksgemeinschaft",
    "Lebensraum",
    "Antisemitismus",
    "Rassismus",
    "Diktatur",
    "Arbeitslosigkeit",
    "Wirtschaftskrise",
    "Inflation",
    "Demokratie",
    "Revolution",
    "Weltkrieg",
    "Judenvernichtung",
    "Goldene Zwanziger",
    "Konzentrationslager",
    "Führerprinzip",
    "Diskriminierung",
    "Ausgrenzung",
    "Vertrag von Versailles",
    "Krise",
    "Nazis",
    "Matrosenaufstand",
    "Machtergreifung",
    "Nationalsozialismus",

]; 

function random_term () {
    var tc = document.getElementById("termcontainer");
    var tdc = document.getElementById("done_terms");

    if (_.isEmpty(terms)) {
        tc.innerHTML = "Keine Begriffe mehr...";
    }
    else {
        var term = _.sample(terms);
        tc.innerHTML = term;
        terms = _.reject(terms, function(t){ return t === term; });
        tdc.innerHTML += term + "<br />";

    }

    /* DEBUG 
    console.log(term);
    console.log(terms);
    console.log(terms_done);
    */
        
};






