# Linh_Nguyen_HW2_CrushingBugs
HW2- CRUSHING BUGS

# 🧩 Drag-and-Drop Puzzle Game – Bug Fix Report  

## 📌 Project Overview  
This project is a simple **drag-and-drop puzzle game** where users move puzzle pieces into designated **drop zones** to solve a puzzle.  
The game initially had two major **bugs** that affected its functionality, which were identified and fixed.

## 🛠 Fixed Bugs  

### **🐞 Bug #1 – Preventing Multiple Pieces in a Drop Zone**  
#### **Issue**  
- The original game logic did not check if a drop zone already contained a puzzle piece before allowing another one to be placed.
- This resulted in multiple pieces stacking inside the same drop zone, disrupting the expected gameplay.
- Since each drop zone should only contain one piece at a time, this behavior was incorrect.

#### **Fix Implemented**  
- Ensured that only one piece can be placed per drop zone by using `hasChildNodes()`.
- Checked if a valid puzzle piece is being dragged before allowing placement.
- If the drop zone is empty, the dragged piece is placed successfully.
- If the drop zone is already occupied, the new piece is rejected, and a message is logged to the console.

#### **Code Fix**  
```javascript
// Bug fix #1 - Ensure only one piece can be placed per drop zone
   if (draggedPiece) { // Check if a valid puzzle piece is being dragged
       if (!this.hasChildNodes()) { // Check if dropzone is empty
           this.appendChild(draggedPiece); // If empty, allow piece drop
       } else {
           console.log("Drop zone already occupied!"); // If not empty, do not drop in
       }
   }
}
// End of bug fix #1

```
#### **Why This Fix Works?**
- Ensures only one puzzle piece is placed in each drop zone at a time.
- Prevents stacking issues by checking if the zone already contains a piece before allowing a new one.
- Avoids unnecessary errors by ensuring a valid dragged piece exists before placement.
- Improves user experience by enforcing the correct puzzle game mechanics.


### **🐞 Bug #2 – Resetting Puzzle Pieces When Changing Background** 
#### **Issue**  
- When users changed the puzzle background, the placed puzzle pieces remained in their drop zones.
- This made it impossible for users to start fresh unless they manually moved pieces back or refreshed the page.
- Expected behavior: When switching backgrounds, all pieces should return to their original container to ensure a clean restart.

#### **Fix Implemented**  
- Created a new function `resetPuzzlePieces()` that loops through all drop zones and moves pieces back to the original container.
- Called this function inside `changeBGImage()` to reset the board whenever the user selects a new puzzle background.
```javascript
// Bug fix #2 - Reset all puzzle pieces when changing background
function resetPuzzlePieces() {
    console.log("Resetting all puzzle pieces..."); // Debugging - check if function is triggered

    dropZones.forEach(zone => {
        while (zone.firstChild) {
            puzzlePiecesContainer.appendChild(zone.firstChild); // Move pieces back to the starting area
        }
    });

    console.log("All pieces have been reset!"); // Confirm successful reset
}
// End of bug fix #2
```
Integration Inside `changeBGImage()`
```javascript
function changeBGImage() {
    puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;
    resetPuzzlePieces(); // Call the reset function to clear the board
}
```
#### **Why This Fix Works?**
- Ensures puzzle pieces reset to their starting position when changing the background.
- Prevents leftover pieces from staying in drop zones after switching puzzles.
- Provides a clean game reset, improving user experience and functionality.

## 📂 Folder Structure
- /css/ → Contains the stylesheets for the game.
- main.css → Defines the layout and appearance of the game.
- /images/ → Stores all images, including puzzle pieces and background images.
- /js/ → Contains the JavaScript logic for game functionality.
- main.js → The main JavaScript file handling drag-and-drop and bug fixes.
- index.html → The main structure of the game.
- README.md → Project documentation explaining bug fixes and implementation.

## **📄 Description of Key Files**
- **`index.html`** → The main structure of the game.  
- **`main.css`** → Styles the game layout and appearance.  
- **`main.js`** → JavaScript file that contains the game logic and bug fixes.  
- **`README.md`** → Project documentation, detailing bug fixes and implementation.  

## **🚀 How to Run the Project**

1. **Download or clone** this repository from GitHub.
2. Open index.html in a browser.
3. Drag and drop the puzzle pieces into the correct drop zones.
4. Use the buttons to change the background.
5. Verify that each drop zone only contains one piece at a time.
6. Check that switching backgrounds resets the puzzle pieces.

## 🛠 Testing and Debugging

#### Testing Bug #1 – Drop Zone Restriction
- Dragged multiple pieces and attempted to drop them into the same drop zone.
- Verified that only one piece was allowed per drop zone at a time.
- Checked the console logs to confirm the "Drop zone already occupied!" message appeared when necessary.

#### Testing Bug #2 – Resetting Pieces on Background Change
- Dropped puzzle pieces into drop zones.
- Selected a new puzzle background.
- Verified that all pieces moved back to the original container.
- Checked the console logs to confirm "Resetting all puzzle pieces..." message appeared.

## 📜 References Used
- [MDN Web Docs – HTML Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
- [W3Schools – HTML5 Drag and Drop](https://www.w3schools.com/html/html5_draganddrop.asp)
- [Stack Overflow – Restricting Drop Zones](https://stackoverflow.com/questions/60479736/how-do-i-only-allow-an-item-to-be-dropped-in-a-certain-place-in-html-javascript)
- [Stack Overflow – Preventing Multiple Items in Drop Zone](https://stackoverflow.com/questions/53067098/html5-drag-and-drop-only-on-item-per-dropzone)
- [Stack Overflow – Reset Draggable Elements](https://stackoverflow.com/questions/65330270/correctly-restore-a-draggable-element-to-its-starting-position)

## 📌 Author
**Linh Nguyen**  
🎓 *Student of Interactive Media Design Program*  

📧 Contact: nngklinh.2911@gmail.com

📂 GitHub: RosesNguyen2911

## 🎉 Final Thoughts

#### By following a structured approach, I was able to:
- ✔ Analyze issues, research solutions, and implement efficient fixes.
- ✔ Bug #1 is fixed → Prevents multiple puzzle pieces in a drop zone.
- ✔ Bug #2 is fixed → Ensures puzzle pieces reset when changing backgrounds.
- ✔ The game now functions smoothly, with no unintended behavior.








