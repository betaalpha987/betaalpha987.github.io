/**
 * Event handler adds example JSON to textarea when button pressed
 */
function addExampleJSON() {

    var taJSON = document.getElementById("taJSONIn");
    taJSON.value = JSON.stringify(exampleJSON, null, 4);

}

/**
 * Event handler modifies json file by incrementing a field, starting at given value and going
 * up by 1 for each item.
*/
function processJSON() {

    var form = document.getElementById("formModifyJSON");
    var fieldToIncrement = form.elements["fieldToIncrement"].value;
    var startingValue = form.elements["startingValue"].value;
    var isNewField = form.elements["newField"].checked;

    var taJSONIn = document.getElementById("taJSONIn");
    var taJSONOut = document.getElementById("taJSONOut");

    var jsonIn = JSON.parse(taJSONIn.value);

    var newJSON = incrementField(jsonIn, fieldToIncrement, startingValue, isNewField);

    taJSONOut.value = JSON.stringify(newJSON, null, 4);
    return false;
}

/** 
 * Perform field increment operation
 */
function incrementField(jsonArray, field, value, isNewField) {

    jsonArray.forEach(function (item) {

        if (item[field] || isNewField) {
            item[field] = typeof field === "string" ? value.toString() : value;
            value++;
        }

    });

    return (jsonArray);

}
