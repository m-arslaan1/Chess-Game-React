# Chess Game React

A React-based chess game with features such as move validation, check/checkmate detection, illegal move notifications, and countdown timers for each player.

## Features

- **Move Validation**: Ensures that all moves are legal according to chess rules.
- **Check/Checkmate Detection**: Notifies players when a check or checkmate occurs.
- **Illegal Move Notifications**: Alerts players when an illegal move is attempted.
- **Countdown Timers**: Each player has a countdown timer to make their moves.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/chess-game-react.git
   cd chess-game-react

2. Install dependencies:
   ```sh
   npm install
   ```

### Usage
1. Start the development server:
   ```sh
   npm start
   ```
2. Open your web browser and navigate to `https://chess-game-001.netlify.app/` to play game.

### Project Structure
- ```src/components/Board/Board.js```: Renders the chessboard and tiles.
- ```src/components/Pieces/Pieces.js```: Manages the pieces and their movements.
- ```src/components/Timer/Timer.js```: Handles the countdown timers and notifications.
- ```src/arbiter/arbiter.js```: Contains the logic for move validation, check/checkmate detection, and illegal move handling.
- ```src/reducer/reducer.js```: Manages the application state using a reducer pattern.
- ```src/reducer/actions/game.js```: Defines actions for game state management.

### Dependencies
- `React`: A JavaScript library for building user interfaces.
- `react-hot-toast`: A library for displaying notifications.
- `react-redux`: Official React bindings for Redux.
- `redux`: A predictable state container for JavaScript apps.