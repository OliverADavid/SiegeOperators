/*  global.js
 *      NOTE: Due to the incredibly tiny size of this script, it is uglified and then embedded directly
 *      into the index.html document.  This is provided merely for debugging.
 */

$(document).ready(function(){
    var sJSON ='operators.json?v=180307';                                      //The path to the JSON data of Operators
    var oImage = $("#opimg");                                                  //HTML ID for the Operator Image to change
    var oName = $("#opname");                                                  //HTML ID for the SPan that contains operator names
    var sPathImg = "images/operators/";                                        //Path to the Operator images (not including image name)
    var aOperators = "";                                                       //DO NOT EDIT: Populated through the loadData() function
    var sLastOp = "";                                                          //DO NOT EDIT: Stores the name of the last picked operator

/*  [l]oadData
    Loads the Operator Data from the defined sJSON variable link.
    @params     none
    @returns    nothing                     Populates the aOperators global variable*/
    function loadData() {
        $.getJSON(sJSON, function(data) {
            aOperators = shuffleArray(data);
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
        sOP = sLastOp;
        while(sOP == sLastOp) {
            sOP = aOperators[Math.floor(Math.random() * aOperators.length)];
        }
        oImage.attr("src", sPathImg+sOP.toLowerCase()+".jpg");
        oName.html("<div class=\"icon " + sOP + "\"></div>" + sOP);
        sLastOp = sOP;
    }

/*  [s]huffleArray
    Simply shuffles an array.  The primary purpose here is to ensure that our alphabetical JSON
    data has a random order when we first load it to avoid weighting against any operators in
    particular.  This is probably overkill.
    Based on the "Fisher-Yates Shuffle" (Source: https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm)
    @params     array       required        The Array to be shuffled
    @returns    array                       The same array in random order */
    function shuffleArray(sourceArray) {
        for (var i = 0; i < sourceArray.length - 1; i++) {
            var ii = i + Math.floor(Math.random() * (sourceArray.length - i));
            var temp = sourceArray[ii];
            sourceArray[ii] = sourceArray[i];
            sourceArray[i] = temp;
        }
        return sourceArray;
    }

//Binds (Attacker and Defender buttons)
    $("#btnAttack").click(function() { pickRandomOperator(aOperators['attackers']); });
    $("#btnDefend").click(function() { pickRandomOperator(aOperators['defenders']); });

//First run, load the JSON Data
    loadData();
});