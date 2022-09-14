window.onload = function () {
	
    	const loginInput = document.querySelector("#login-form input");
    	const loginButton = document.querySelector("#login-form button");    
    	
    	
    loginButton.addEventListener("click", function(){
	const userName = loginInput.value;	
	if (userName === "") {
		console.log("본인의 이름을 입력하세요");
	} else if(userName.length > 10) {
		alert("이름이 너무 깁니다");
	}	 
    });
}