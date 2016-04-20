	var btn = document.getElementsByTagName("input");
	var perBtn = btn[0];
	var inBtn = btn[1];
	var postBtn = btn[2];
	var Root = document.getElementsByClassName( "root")[0];
	var divList = [];
	var timer = null;


window.onload = function (){
	perBtn.onclick = function (){
        reset();
        preOrder(Root);
        changeColor();
	}

	inBtn.onclick = function (){
		reset();
		inOrder(Root);
		changeColor(); 	
	}

	postBtn.onclick = function (){
		reset();
		postOrder(Root);
		changeColor();	
	}

}

function preOrder(node){
	if (!(node == null)) {
		divList.push(node);
		preOrder(node.firstElementChild);
		preOrder(node.lastElementChild);
	}	
}

//中序遍历
function inOrder(node) {
	if (!(node == null)) {
		inOrder(node.firstElementChild);
		divList.push(node);
		inOrder(node.lastElementChild);
	}
}

//后序遍历
function postOrder(node) {
	if (!(node == null)) {
		postOrder(node.firstElementChild);
		postOrder(node.lastElementChild);
		divList.push(node);
	}
}

function changeColor (){
	var i = 0;
	divList[i].style.backgroundColor = 'blue';
	timer = setInterval(function (argument){
	    i++;
	    if(i<divList.length){
			divList[i-1].style.backgroundColor = '#fff';
			divList[i].style.backgroundColor = 'blue';
	    }else {
	    	clearInterval(timer);
	    	divList[divList.length-1].style.backgroundColor = '#fff';
	    }

	}, 500)
}

//初始化样式
function reset() {
	divList = [];
	clearInterval(timer);
	var divs = document.getElementsByTagName('div');
	for (var i = 0; i < divs.length; i++) {
		divs[i].style.backgroundColor = '#fff';
	}
}