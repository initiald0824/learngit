window.onload = function () {
   
    console.log("hi");
    var text = document.getElementById("text");
    var leftIn = document.getElementById("left-in");
    var leftOut = document.getElementById("left-out");
    var rightIn = document.getElementById("right-in");
    var rightOut = document.getElementById("right-out");
    var display = document.getElementById("display");

    function addEvent(element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    }

    addEvent (leftIn,"click",function(){
        var li = document.createElement("li");
        li.innerHTML = text.value;
        console.log("leftin");
        display.insertBefore(li,display.firstChild);      
    });

    addEvent (rightIn,"click",function(){
        var li = document.createElement("li");
        li.innerHTML = text.value;
        console.log("rightIn");
        display.appendChild(li);
    });

    addEvent (leftOut,"click",function(){

        if (display.firstChild !== null){
           display.removeChild(display.firstChild);
        }
        else 
           alert("没有了");
    });

    addEvent (rightOut,"click",function(){

        if (display.lastChild !== null){
           display.removeChild(display.lastChild);
        }
        else
           alert ("没有了");
    });

    addEvent(text, "focus", function () {
       text.value = "";
    });

};