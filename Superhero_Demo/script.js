// Variables:
const idListOne = ["#BW1", "#WW1", "#CM1", "#WV1", "#SF1"];
const idListTwo = ["#BW2", "#WW2", "#CM2", "#WV2", "#SF2"];
const idListThree = ["#BW3", "#WW3", "#CM3", "#WV3", "#SF3"];


// Event Listeners:
document.querySelector("#selectBW").addEventListener("click", function() { toggleHidden("#BW1", "#BW2", "#BW3") });
document.querySelector("#selectWW").addEventListener("click", function() { toggleHidden("#WW1", "#WW2", "#WW3") });
document.querySelector("#selectCM").addEventListener("click", function() { toggleHidden("#CM1", "#CM2", "#CM3") });
document.querySelector("#selectWV").addEventListener("click", function() { toggleHidden("#WV1", "#WV2", "#WV3") });
document.querySelector("#selectSF").addEventListener("click", function() { toggleHidden("#SF1", "#SF2", "#SF3") });


// Functions:
function toggleHidden(idOne, idTwo, idThree) {
    /*
        - Complete toggle function for the 'character'
        - Toggles the "hidden" class attribute for the 'character' by calling the functions toggleAddHidden() and 
            toggleRemoveHidden()
    */

    // Log the events:
    // console.log(`IDs passed in: ${idOne} ${idTwo} ${idThree}`);

    toggleHiddenList(idOne, idListOne);
    toggleHiddenList(idTwo, idListTwo, false);
    toggleHiddenList(idThree, idListThree, false);

    // Add the class attribute "animated" for the specfic character by using idTwo and idThree
    document.querySelector(idTwo).classList.add("animated");
    document.querySelector(idThree).classList.add("animated");
}

function toggleHiddenList(idFilter, idList, isAdd = true) {
    for (const ID of idList) {
        // check to see if the current element is equal to the idFilter
        if (ID === idFilter) {
            // TOGGLE the class attribute "hidden"
            document.querySelector(idFilter).classList.toggle("hidden");
        } else {
            const elmClassList = document.querySelector(ID).classList;
            
            if (isAdd) {
                // for all of the other elements in the array, ADD the class attribute "hidden".
                elmClassList.add("hidden");
            } else {
                // for all of the other elements in the array, REMOVE the class attribute "hidden".
                elmClassList.remove("hidden");
            }
        }
    }
}
