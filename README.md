# Number Guessing Game

A fun and interactive number guessing game built with HTML, CSS, and JavaScript. Players need to guess a random number between 1 and 100 within 10 attempts.

## 🎮 Game Features

- **Random Number Generation**: Each game generates a random number between 1-100
- **10 Attempts Limit**: Players have 10 chances to guess the correct number
- **Real-time Feedback**: Get hints whether your guess is too high or too low
- **Previous Guesses Display**: See all your previous attempts
- **Remaining Attempts Counter**: Track how many guesses you have left
- **Game Over Detection**: Automatically ends when you run out of attempts or guess correctly
- **New Game Option**: Restart the game anytime after completion
- **Input Validation**: Ensures only valid numbers between 1-100 are accepted
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Clean and intuitive user interface with FontAwesome icons

## 🚀 How to Play

1. Open `game/index.html` in your web browser
2. You'll see a form asking you to guess a number
3. Enter a number between 1 and 100
4. Click "Submit guess" or press Enter
5. The game will tell you if your guess is too high or too low
6. Keep guessing until you find the correct number or run out of attempts
7. After the game ends, click "Start New Game" to play again

## 📁 Project Structure

```
guessing_game/
├── README.md
└── game/
    ├── index.html      # Main HTML file
    ├── index.css       # Stylesheet
    └── index.js        # JavaScript game logic
```

## 🛠️ Technologies Used

- **HTML5**: Structure and markup
- **CSS3**: Styling and responsive design
- **JavaScript (ES6+)**: Game logic and interactivity
- **FontAwesome**: Icons for enhanced UI

## 📦 Installation

1. Clone or download this repository
2. Navigate to the project directory
3. Open `game/index.html` in your web browser
4. No additional setup required - the game runs entirely in the browser

## 🎯 Game Rules

- The game generates a random number between 1 and 100
- You have exactly 10 attempts to guess the correct number
- After each guess, you'll receive feedback:
  - "The Num Is TOOOOO High" - if your guess is too high
  - "The Num Is tooooo low" - if your guess is too low
  - "You Hit The Random_Num [number]" - if you guess correctly
- The game ends when you either:
  - Guess the correct number (WIN!)
  - Run out of attempts (Game Over)
- You can start a new game anytime after completion

## 🔧 Features in Detail

### Input Validation
- Only accepts numbers between 1-100
- Shows alert for invalid inputs
- Prevents form submission with invalid data

### Game State Management
- Tracks current game state (playing/ended)
- Manages attempt counter
- Stores and displays previous guesses

### User Experience
- Clear visual feedback for all game states
- Disabled input after game ends
- Easy restart functionality
- Responsive design for all screen sizes

## 🎨 Customization

You can easily customize the game by modifying:
- **Range**: Change the number range in `index.js` (line 1)
- **Attempts**: Modify the attempt limit in the JavaScript logic
- **Styling**: Update colors and layout in `index.css`
- **Messages**: Customize feedback messages in the JavaScript functions

## 🌟 Future Enhancements

Potential improvements for the game:
- Add difficulty levels (different ranges)
- Implement a scoring system
- Add sound effects
- Create a high score leaderboard
- Add animations for correct guesses
- Implement a timer mode

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to contribute to this project by:
- Reporting bugs
- Suggesting new features
- Submitting pull requests
- Improving documentation

## 📞 Support

If you have any questions or issues with the game, please open an issue in the repository.

---

**Enjoy playing the Number Guessing Game! 🎲**