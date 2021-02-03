/* Hendrik Bunke, 2018-03-16 */
/* Bingo with subject terms */

"use_strict";

var terms = [
    "Mindestlohn", 
    "Ludwig Erhard", 
    "Systemkonkurrenz", 
    "Markt", 
    "Monopole", 
    "ordoliberal",
    "freie Marktwirtschaft",
    "Raubtierkapitalismus",
    "Wirtschaftsordnung",
    "Adam Smith",
    "Gewinn",
    "Wettbewerb",
    "Gesetze",
    "soziale Ungerechtigkeit",
    "soziale Gerechtigkeit",
    "Alfred Müller-Armack",
    "Privateigentum an Produktionsmitteln",
    "Schutzfunktion des Staates",
    "Sozialgesetzgebung",
    "sozialer Frieden",
    "Sozialversicherungen",
    "Kündigungsschutz",
    "Mitbestimmung",
    "Jugendarbeitsschutz",
    "Verbot von Kinderarbeit",
    "Integration",
    "Walter Eucken",
    "Freiburger Schule",
    "Regulierung",
    "Arbeitnehmerschutz",
    "Gleichberechtigung am Arbeitsplatz",
    "staatliche Kontrollen",
    "Ausbeutung",
    "Arbeitsunfähigkeit",
    "Tarifautonomie",
    "Streikrecht",
    "Morgenthau-Plan",
    "Marshall-Plan",
    "Planwirtschaft",
    "Marshall-Plan",
    "Gemeineigentum",
    "Ahlener Programm",
    "Kapitalismus",
    "Sozialismus",
    "historische Erfahrungen",
    "schneller Wiederaufbau",
    "Recht auf Eigentum",
    "sozialer Ausgleich",
    "Bundesrepublik Deutschland",
    "Wirtschaftswunder",
    "Arbeitszeitregulierung"
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






