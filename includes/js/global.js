/*  global.js
 *      NOTE: Due to the incredibly tiny size of this script, it is uglified and then embedded directly
 *      into the index.html document.  This is provided merely for debugging.
 */

$(document).ready(function(){
    var sJSON ='operators.json';                                               //The path to the JSON data of Operators
    var oImage = $("#opimg");                                                  //HTML ID for the Operator Image to change
    var oName = $("#opname");                                                  //HTML ID for the SPan that contains operator names
    var sPathImg = "images/operators/";                                        //Path to the Operator images (not including image name)
    var aOperators = "";                                                       //DO NOT EDIT: Populated through the loadData() function

/*  [l]oadData
    Loads the Operator Data from the defined sJSON variable link.
    @params     none
    @returns    nothing                     Populates the aOperators global variable*/
    function loadData() {
        $.getJSON(sJSON, function(data) {
            aOperators = data;
        });
    }

/*  [p]ickRandomOperator
    Pick a random operator from the available list.  The list should already be
    loaded from the loadData() function and stored in the aOperators variable.
    Script will check currently selected operator and refuse to pick th esame operator
    two times in a row.
    @params     array       required        an Array/JSON of Operators to pick from
    @returns    nothing                     Updates the UI wtih a random operator. */
    function pickRandomOperator(aOperators) {
        sCurrent = oName.html();
        sOP = sCurrent;
        while(sOP == sCurrent) {
            sOP = aOperators[Math.floor(Math.random() * aOperators.length)];
        }
        oImage.attr("src", sPathImg+sOP.toLowerCase()+".jpg");
        oName.html(sOP);
    }


//Binds (Attacker and Defender buttons)
    $("#btnAttack").click(function() { pickRandomOperator(aOperators['attackers']); });
    $("#btnDefend").click(function() { pickRandomOperator(aOperators['defenders']); });

//First run, load the JSON Data
    loadData();
});