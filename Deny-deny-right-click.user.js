// ==UserScript==
// @name         No-noRightClick
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  RPH block right-click-blockers
// @author       Esoliken
// @match        http://www.roleplaychat.co/profile_iframe.php?userid=*
// @grant        Free to all
// ==/UserScript==

//Settings: 0 = false/no/first ; 1 = true/yes/second
var settings = [1]; //create element or console.log

if(document.oncontextmenu){
    //undos the anti-right blocks
    var supremeAss = "n ";
    document.oncontextmenu = (function(){return true;});
    $(document).off("mousedown");
    supremeAss = ($("head script")[3].innerText.indexOf("alert(") > 0? " <strong>SUPREME</strong> " : "n ");

    if(settings[0]){
        console.log("The deny-deny right-click script activated.");
    } else {
        var docs = document.getElementById("profile-container");
        docs.style.top += 20;
        docs.style.top += "px";
        var drcs = document.createElement("div");
        var widt = docs.offsetWidth;

        drcs.style = "position: fixed; top: -10px; width: 810px; border-radius: 4px;" +
                 "height: 45px; background: #553333; border: 1px solid #f9a300;" +
                 "padding: 2px; color: white; font-weight: bold; text-align: center;";
        drcs.innerHTML = "<p style=\"position: absolute; bottom: 0px; text-align: " +
                 "center; width: 100%;\">The deny-deny right-click script activated. " +
                 "This person might be a" + supremeAss + "asshole.</p>";
        drcs.style.left = ((window.innerWidth - 810)/2) + "px";
        docs.appendChild(drcs);
    }
}
