
window.onload = function() {
	
	const h1 = document.querySelector("div.hello:first-child h1");
	
//	title.innerText = "안녕 친구들~!";	
//	console.dir(title);
//	title.style.color = "blue";

	
	
//	h1.addEventListener("click", function() {
//		h1.style.color = "green";
//	});
//	h1.addEventListener("mouseenter", function() {
//		h1.innerText = "마우스를 올리면 내가 나와";	
//	});
//	h1.addEventListener("mouseleave", function() {
//		h1.innerText = "마우스를 때면 내가 나와";	
//	});
//
//	title.onclick = function () {
//		title.style.color = "green";
//	};
	
	function handleTitleClickFnc() {
//		console.log(h1.style.color);
//		h1.style.color = "blue";
//		console.log(h1.style.color);
//	const currentColor = h1.style.color;
//	let newColor;
//	if(currentColor === "blue"){
//		newColor = "red";
//	} else {
//		newColor = "blue";
//	}
//	h1.style.color = newColor;
	const clickedClass = "clicked sexy-Font";
	if(h1.className === clickedClass) {
		h1.className = "";
	} else {
		h1.className = clickedClass;
	}
	};
	h1.addEventListener("click", handleTitleClickFnc);
};

//function ResizeFnc(){
//	document.body.style.backgroundColor = "black";
//}
//
//	window.addEventListener("resize", ResizeFnc);
