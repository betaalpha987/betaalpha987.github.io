/**
 * Reveal the page for the tab the user selected
 */
function openPage(pageName, elmnt, color) {

    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }

    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;

}

function openCreateHelp() {
    document.getElementById("CreateHelp").style.display="block";
}

function closeCreateHelp() {
    document.getElementById("CreateHelp").style.display="none";
}