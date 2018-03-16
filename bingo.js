"use_strict";


var terms = ["Mindestlohn", "Ludwig Erhard", "Systemkonkurrenz"];
var terms_done = [];



function random_term () {
    var tc = document.getElementById("termcontainer");
    var term = terms[Math.floor(Math.random() * terms.length)];
    var index = term.indexOf(term);
    terms.splice(index, 1);
    terms_done.push(term);
    tc.innerHTML = term;
    console.log(term);
    console.log(terms);
    console.log(terms_done);
};



