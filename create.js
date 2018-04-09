/**
 * Event handler adds example template to textarea when button pressed
 */
function addExampleTemplate() {

    var taTemplate = document.getElementById("taTemplate");
    taTemplate.value = JSON.stringify(exampleTemplate, null, 4);

}

/**
 * Process the template and output JSON
 */
function processTemplate() {
    var taTemplate = document.getElementById("taTemplate");
    var taOutput = document.getElementById("taOutput");

    var template = JSON.parse(taTemplate.value);

    var newJSON = generateJSON(template);

    taOutput.value = JSON.stringify(newJSON, null, 4);
    return false;
}

/** 
* Generate JSON file from passed-in template
*/
function generateJSON(templateJSON) {

    var recordCount = templateJSON.recordCount;

    // Create array and fill with empty objects
    var arr = [];
    for (var i = 0; i < recordCount; i++) {
        arr.push({});
    };

    // For each item in the user's template, add a key/value pair to every object in the array
    templateJSON.template.forEach(function (item) {
        if (!item.keyName) {
            console.warn("A template item doesn't have a keyName. Please ensure all template items have one.");
        } else if (!item.type) {
            console.warn("keyName " + item.keyName + " doesn't have a type. Please ensure all template items have one.");
        } else {

            switch (true) {

                case item.type === "same":
                    arr = processSame(arr, item);
                    break;
                case item.type === "index":
                    arr = processIndex(arr, item);
                    break;
                case item.type.startsWith("sample"):
                    arr = processSample(arr, item);
            }

        }

    });

    return arr;

}

/**
 * Populate arr objects with key and value. Value is always the same.
 */
function processSame(arr, item) {
    if (!item.value) console.warn("Keyname " + item.keyName + ": same-type items need a value.");

    arr.forEach(function (record) {
        record[item.keyName] = item.value;
    });

    return arr;
}

/**
 * Populate arr objects with key and value. Value is an ascending number.
 */
function processIndex(arr, item) {

    if (!item.startAt) {
        item.startAt = 0
    } else if (typeof (item.startAt) == "string") {

        // Set makeString to true so it can be converted back after doing indexing.
        // Also count number of leading zeroes so they can be added back. 
        item.makeString = true;
        item.leadingZeroes = getLeadingZeroes(item.startAt);
        item.startAt = parseFloat(item.startAt);

    }

    if (item.leadingZeroes) {
        // Total length allows for adding leading zeroes while taking into account 099 -> 100 situations
        item.totalLength = item.startAt.toString().length + item.leadingZeroes
    }

    arr.forEach(function (record) {

        var amount = item.startAt;

        if (item.makeString) {

            amount = amount.toString();

            if (item.leadingZeroes) {
                amount = amount.padStart(item.totalLength, "0");
            }

        }

        record[item.keyName] = amount;
        item.startAt++;

    });

    function getLeadingZeroes(str) {

        var i;
        for (i = 0; i < str.length; i++) {
            if (str[i] !== '0') {
                break;
            }
        }
        return i;

    }

    return arr;
}

/**
 * Populate arr objects with key and value. Value is chosen from an array. Array of values is
 * a preset one or a custom array given by the user.
 */
function processSample(arr, item) {

    if (!item.startAt) {
        item.startAt = 0;
    }

    var sampleArr = getSample(item);

    if (sampleArr) {

        arr.forEach(function (record) {

            record[item.keyName] = sampleArr[item.startAt];
            item.startAt++;
            if (item.startAt >= sampleArr.length) {
                item.startAt = 0;
            }

        });

    }

    return arr;

}

/**
 * Get sample array for the sample json type
 */
function getSample(item) {

    var sampleArr = [];
    // Determine sample array to run through
    switch (item.type) {

        case "sample custom":
            if (!item.custom || !Array.isArray(item.custom)) {

                console.warn("keyName " + item.keyName + ": type 'sample custom' needs a custom key with a value that's an array of samples.");
                return;

            } else {

                sampleArr = item.custom;
                return sampleArr;

            }
        case "sample countries":

            pre_countries.forEach(function (item) {
                sampleArr.push(item.nameEnglish);
            });
            return sampleArr;

        case "sample firstNames":

            sampleArr = pre_firstNames;
            return sampleArr;

        case "sample lastNames":

            sampleArr = pre_lastNames;
            return sampleArr;

        case "sample firstLastNames":

            pre_firstNames.forEach(function (firstName, ind) {
                sampleArr.push(firstName + " " + pre_lastNames[ind]);
            });
            return sampleArr;

        case "sample weightsPlural":

            sampleArr = pre_uomWeightsPlural;
            return sampleArr;

        default:
            console.warn("keyName " + item.keyName + ": sample type " + item.type + " not known.");
            return;

    }

}
