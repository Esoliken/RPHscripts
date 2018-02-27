// ==UserScript==
// @name         No-noRightClick
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  RPH block right-click-blockers
// @author       Esoliken
// @match        http://www.roleplaychat.co/profile_iframe.php?userid=*
// @grant        none
// @license      Open to all
// ==/UserScript==

//Settings: 0 = false/no/first ; 1 = true/yes/second
var settings = [1]; //create element or console.log

if(document.oncontextmenu){
    //undos the anti-right blocks
    document.oncontextmenu = (function(){return true;});

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
                 "This person might be an asshole.</p>";
        drcs.style.left = ((window.innerWidth - 810)/2) + "px";
        docs.appendChild(drcs);
    }
}
