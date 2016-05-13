
		var link = document.querySelector(".feedback-form-btn");
		var popup=document.querySelector(".modal-content");
		var close=popup.querySelector(".modal-content-close");
		var overlay=document.querySelector(".modal-overlay");
		var name1=popup.querySelector("[name=user-name]");
		var email=popup.querySelector("[name=user-email]");
		var form=popup.querySelector("form");


		link.addEventListener("click", function(event) {
			event.preventDefault();
			popup.classList.add("modal-content-show");
			overlay.classList.add("modal-overlay-show");
			name1.focus("");
		});

		close.addEventListener("click", function(event){
			event.preventDefault();
			popup.classList.remove("modal-content-show");
			overlay.classList.remove("modal-overlay-show");
		});
/*
		form.addEventListener("submit", function(event){
			if(!name1.value||!email.value){
			event.preventDefault();	
			console.log("Нужно ввести логин и пароль");
			}
		});
		*/
		window.addEventListener("keydown", function(event){
if(event.keyCode===27){
	if(popup.classList.contains("modal-content-show")){
		popup.classList.remove("modal-content-show");
		overlay.classList.remove("modal-overlay-show");
	}
}
		});