/* Hendrik Bunke, 2018-03-16 */
/* Bingo with subject terms */

"use_strict";


var terms = ["Mindestlohn", "Ludwig Erhard", "Systemkonkurrenz"];
var terms_done = [];



function random_term () {
    var tc = document.getElementById("termcontainer");
    var term = terms[Math.floor(Math.random() * terms.length)]; /* underscore has a shuffle function: http://underscorejs.org/#shuffle; perhaps better */

    var index = term.indexOf(term);
    terms.splice(index, 1);
    terms_done.push(term);
    tc.innerHTML = term;
    console.log(term);
    console.log(terms);
    console.log(terms_done);
    /* use _.isEmpty() to check if list is empty
     * http://underscorejs.org/#isEmpty */

};



