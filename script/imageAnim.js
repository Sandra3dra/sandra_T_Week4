(() => {
	const pieces = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

	let piecesBoard = document.querySelector(".puzzle-pieces"),
		puzzleBoard = document.querySelector(".puzzle-board"),
		puzzleSelectors = document.querySelectorAll("#buttonHolder img");

	function createPuzzlepieces(pictureIndex){
		// debugger;
		pieces.forEach((piece, index) => {
			let newPuzzlePiece = `<img id="piece${index}" class="puzzle-image" src="images/${piece + pictureIndex}.jpg" alt="thumbnail">`;

			piecesBoard.innerHTML += newPuzzlePiece;
 		})

 		puzzleBoard.style.backgroundImage = `url(./images/backGround${pictureIndex}.jpg)`;
 		
	}

	function resetPuzzlePieces(){
		// debugger;
		piecesBoard.innerHTML = "";
		createPuzzlepieces(this.dataset.puzzleref)
	}

	puzzleSelectors.forEach(puzzle => puzzle.addEventListener("click", resetPuzzlePieces));

	createPuzzlepieces(0);
})();
