window.onload = function () {
   
    console.log("hi");
    var text = document.getElementById("text");
    var leftIn = document.getElementById("left-in");
    var leftOut = document.getElementById("left-out");
    var rightIn = document.getElementById("right-in");
    var rightOut = document.getElementById("right-out");
    var display = document.getElementById("display");



    function pankong (str){


      if (str == null || str == undefined || str == '') {
        return false;
      }
      else
        return  true;
    }

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
        
        var result = pankong(text.value);
        console.log(result);

        if (result){
            if(text.value.match(/^\d+$/)){
                var li = document.createElement("li");
                li.innerHTML = text.value;
                display.insertBefore(li,display.firstChild);
            }
            else   alert("输入必须为数字");
        }
        else 
            alert("输入为空");
    });

    addEvent (rightIn,"click",function(){      

        var result = pankong(text.value);
        console.log(result);

        if (result){
            if(text.value.match(/^\d+$/)){
                var li = document.createElement("li");
                li.innerHTML = text.value;
                display.appendChild(li);
            }
            else   alert("输入必须为数字");
        }
        else 
            alert("输入为空");
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