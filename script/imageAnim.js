(() => {
	// set up the puzzle pieces and boards
	let theButton = document.querySelector("#buttonHolder img");

	// window.addEventListener("load", changeHeaderText);     

	function changeHeaderText(){
		document.querySelector("h1").textContent = "Free Tacos!"
	}

	theButton.addEventListener("click", changeHeaderText);

})();
