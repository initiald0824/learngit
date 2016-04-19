window.onload = function () {
   
    console.log("hi");
    var text = document.getElementById("text");
    var leftIn = document.getElementById("left-in");
    var leftOut = document.getElementById("left-out");
    var rightIn = document.getElementById("right-in");
    var rightOut = document.getElementById("right-out");
    var sortnum = document.getElementById("sortnum");
    var getran = document.getElementById("getran");
    var list = document.getElementById("list");
    var data = [];
    var innerSpan = list.getElementsByTagName('div');

    // 处理输入的数
    function panduan (str){

      if (str == null || str == undefined || str == '') {
        return false;
      }
      else{
        if (str.match(/^\d+$/)){
            if (str<100&&str>10){
                return true;
            }
            else 
                return false;
        }
        else 
            return false;
      }
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

    addEvent (getran,"click",function(){
        
        // var data = [];
        for (var i = 0; i < 60; i++) {
            var randomNum = Math.floor(Math.random()*90+10);
            data.push(randomNum);
            list.innerHTML += '<div></div>';
            var newSpan = list.getElementsByTagName('div');
            newSpan[i].style.height = parseInt(randomNum) + 'px';
        } 

    });

    addEvent (sortnum,"click",function(){

        var eleHeight = [];
        var innerSpan = list.getElementsByTagName('div');
        // var newSpan = list.getElementsByTagName('div');

    for (var q = 0; q < innerSpan.length; q++) {
        eleHeight.push(innerSpan[q].offsetHeight);       
    }

    console.log(eleHeight);

    var i = data.length, j;
    var tempExchangVal;
 

    while (i > 0) {
        for (j = 0; j < i - 1; j++) {
            if (data[j] > data[j + 1]) {
                tempExchangVal = data[j];
                data[j] = data[j + 1];
                data[j + 1] = tempExchangVal;
                // innerSpan[i].style.height = data[i];
                // innerSpan[j].style.height = tempExchangVal;

            }
        }
        i--;
    }


    console.log(data);

    for (r =0;r< innerSpan.length;r++){
        innerSpan [r].style.height = data[r];
    }
;



    });


    addEvent (leftIn,"click",function(){
        
        var result = panduan(text.value);


        if (result){
            var newSpan = document.createElement("div");
            list.insertBefore(newSpan,list.firstChild);
            newSpan.style.height = parseInt(text.value) + 'px';
            data.push( parseInt(text.value));
            console.log(data);
        }
        else 
            alert("输入错误");
        


    });

    addEvent (rightIn,"click",function(){      

        var result = panduan(text.value);
        console.log(result);

        if (result){
            var newSpan = document.createElement("div");
            list.appendChild(newSpan);
            newSpan.style.height = parseInt(text.value) + 'px';
            data.push( parseInt(text.value));
            console.log(data);
        }
        else 
            alert("输入有误");
    });

    addEvent (leftOut,"click",function(){

        if (list.firstChild !== null){
           list.removeChild(list.firstChild);
           data.pop();
           console.log(data);
        }
        else 
           alert("没有了");
    });

    addEvent (rightOut,"click",function(){

        if (list.lastChild !== null){
           list.removeChild(list.lastChild);
           data.shift();
           console.log(data);
        }
        else
           alert ("没有了");
    });

    addEvent(text, "focus", function () {
       text.value = "";
    });




};