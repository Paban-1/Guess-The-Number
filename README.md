# Number Guessing Game

A fun and interactive **Number Guessing Game** built with HTML, JavaScript, and Tailwind CSS. Players try to guess a randomly generated number between 1 and 100 within 10 attempts. The game provides hints (too high or too low), validates inputs, and displays a win message or reveals the correct number upon losing. The UI features a vibrant neon theme with smooth animations, making it engaging and responsive across devices.

![Number Guessing Game Screenshot](screenshot.png)

## Live Demo
Check out the live demo [here](https://paban-1.github.io/Guess-The-Number/)!

## Features
- **Input Validation**: Ensures guesses are numbers between 1 and 100, with clear error messages.
- **Dynamic Hints**: Indicates if the guess is too high or too low to guide the player.
- **Win/Lose Feedback**: Shows a congratulatory message on winning or reveals the computer’s number on losing.
- **Attempt Counter**: Limits players to 10 guesses, with a remaining attempts display.
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop screens.
- **Neon-Themed UI**: Styled with Tailwind CSS, featuring neon green, electric blue, and charcoal colors.
- **Animations**: Smooth slide-in for the title, pulsating button, and ripple effect on click.
- **Restart Option**: Allows starting a new game after winning or losing.

## Technologies
- **HTML5**: Structure of the game interface.
- **JavaScript**: Handles game logic, random number generation, validation, and feedback.
- **Tailwind CSS**: Responsive styling with a custom neon theme (via CDN).
- **Custom CSS**: Minimal styles for gradient text and glow effects.

## Setup
To run the project locally:

1. **Clone the Repository**:
   - Replace `your-username` with your GitHub username.
   - Run:
     ```bash
     git clone https://github.com/your-username/number-guessing-game.git
     cd number-guessing-game
     ```

2. **Open the Project**:
   - Open `index.html` in a web browser (e.g., Chrome, Firefox).
   - Or use a local server (e.g., VS Code’s Live Server extension) for development.

3. **Optional: Customize Tailwind**:
   - The project uses Tailwind CSS via CDN. To customize:
     ```bash
     npm install -D tailwindcss
     npx tailwindcss init
     ```
   - Compile Tailwind CSS:
     ```bash
     npx tailwindcss -i ./input.css -o ./style.css --watch
     ```

## Usage
1. Enter a number between 1 and 100 in the input field.
2. Click the **Guess** button or press Enter.
3. Receive feedback:
   - **Error**: If the input is invalid (e.g., empty, non-numeric, or outside 1–100), a red error message appears.
   - **Hint**: If the guess is too high or too low, a hint is displayed (e.g., "Too High!").
   - **Win**: If you guess correctly within 10 attempts, a green success message appears with a restart option.
   - **Lose**: After 10 incorrect guesses, the computer’s number is revealed with a restart option.
4. Click **Play Again** to start a new game.

## Live Demo
Play the game live at [https://paban-1.github.io/Guess-The-Number/](https://paban-1.github.io/Guess-The-Number/).

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

Please follow the existing code style and include tests if applicable.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments
- Inspired by classic number guessing games and the live demo at [paban-1.github.io](https://paban-1.github.io/Guess-The-Number/).
- Built with [Tailwind CSS](https://tailwindcss.com) for rapid, responsive styling.
- Thanks to the open-source community for tools and inspiration.

## Contact
For questions or feedback, reach out via [GitHub Issues](https://github.com/Paban-1/number-guessing-game/issues) or email at your-rpaban89@.com.
