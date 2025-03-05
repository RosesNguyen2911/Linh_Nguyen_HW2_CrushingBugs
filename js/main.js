// variables always go at the top -> this is step 1
// these are the connections that you're making to elements on the page
// use CSS selectors to make connections to elements with JavaScript

// create a 1 to 1 connection with a variable -> querySelector("queryString")
// let theButton = document.querySelector("#buttonOne");

// create a 1 to many connection with a variable -> querySelectorAll("queryString")
let theButtons = document.querySelectorAll('#buttonHolder img'),
puzzleBoard = document.querySelector('.puzzle-board'),
puzzlePieces = document.querySelectorAll('.puzzle-pieces img'),
dropZones = document.querySelectorAll('.drop-zone'),
puzzlePiecesContainer = document.querySelector('.puzzle-pieces'), // Stores the initial puzzle pieces container
	// store the dragged piece in a global variable
	// because we need it in the handleDrop function
    draggedPiece;

// step 3
// functionality always goes in the middle -> how do we want
// the app to behave?
function changeBGImage() {
	// the `` is a JavaScript template string. It tells the JS engine to evaluate the expression
	// inside the braces - run that little bit of code. In this case it's just pulling the ID of the
	// button we clicked on and putting it at the end of the image name (0, 1, 2, 3)
	// and updating the background-image style of the puzzle board element.

	// bug fix #2 should go here. it's at most 3 lines of JS code.
    puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;

resetPuzzlePieces(); // Call the reset function to clear the board
}

function resetPuzzlePieces() {
    console.log("Resetting all puzzle pieces..."); // Debugging - check if function is triggered

    // Loop through all drop zones to check for any placed puzzle pieces
    dropZones.forEach(zone => {
        while (zone.firstChild) { // While there is a piece inside the drop zone
            puzzlePiecesContainer.appendChild(zone.firstChild); // Move the piece back to the original container
        }
    });

    console.log("All pieces have been reset!"); // Confirm successful reset
}
// End of bug fix #2

function handleStartDrag() {
    console.log('started dragging this piece: ', this);
    // store a reference to the puzzle piece image that we're dragging
	// so we can use it later and move it to a drop zone
    draggedPiece = this;
}

function handleDragOver(e) {
    e.preventDefault(); // e is shorthand for event
	// this overrides the default dragover behaviour
    console.log('you dragged over me');
}

function handleDrop(e) {
    e.preventDefault();
    console.log('Dropped something on me');

    // Bug fix #1 - Ensure only one piece can be placed per drop zone
    if (draggedPiece) { // Check if a valid puzzle piece is being dragged
        if (!this.hasChildNodes()) { // Check if drop zone is empty
            this.appendChild(draggedPiece); // If empty, allow piece drop
        } else {
            console.log("Drop zone already occupied!"); // If not empty, do not drop in
        }
    }
}
// End of bug fix #1

// event listeners
// add event handling to each button in the collection of buttons, one at a time
theButtons.forEach(button => button.addEventListener('click', changeBGImage));

// add drag event handling to the puzzle pieces
puzzlePieces.forEach(piece => piece.addEventListener('dragstart', handleStartDrag));

// add the dragover AND the drop event handling to each drop zone
dropZones.forEach(zone => zone.addEventListener('dragover', handleDragOver));

// add the drop event handling
dropZones.forEach(zone => zone.addEventListener('drop', handleDrop));