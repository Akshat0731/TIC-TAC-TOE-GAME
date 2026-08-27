# TIC-TAC-TOE-GAME

A simple and interactive **Tic-Tac-Toe game** built using **HTML, CSS, and JavaScript**.

The game supports **two players**, where each player can choose either **X or O** and take turns placing their symbol on the board. The game automatically detects a winner or a draw.

## # Features

* Two-player gameplay
* Player can choose **X or O**
* Automatic turn switching
* Automatic winner detection
* Draw detection
* Different colors for X and O
* Hover effects on game boxes
* Restart the game by pressing any key
* Uses unique IDs for each game box

## # How To Play

1. Open the game in your browser.
2. Press **any key** to start.
3. Choose whether Player 1 will play as **X** or **O**.
4. Players take turns clicking on an empty box.
5. The first player to get **three symbols in a row** wins.
6. If all boxes are filled without a winner, the game ends in a **draw**.
7. Press any key to start a new game.

## # Winning Conditions

A player wins when their symbol appears three times in:

* A horizontal row
* A vertical column
* A diagonal

## # Technologies Used

* **HTML5** — Creates the game structure and board.
* **CSS3** — Handles styling, layout, colors, and hover effects.
* **JavaScript** — Controls game logic, player turns, winner detection, draw detection, and restarting.

## # JavaScript Concepts Used

This project helped practice:

* DOM Manipulation
* Event Listeners
* Functions
* Conditional Statements
* Arrays
* Loops
* `querySelector()` and `querySelectorAll()`
* `getAttribute()`
* Dynamic element creation
* Event handling
* Ternary Operator
* Game State Management

## # Game Logic

The game stores the state of all nine boxes inside an array:
let blocks = [false, false, false, false, false, false, false, false, false];

When a player selects a box, its value is changed to either `X` or `O`.

The game then checks all possible winning combinations to determine whether a player has won.

## # Goal

The goal of this project was to practice **JavaScript DOM manipulation and event handling** by building a complete interactive browser game.

## # Author

**Akshat**
