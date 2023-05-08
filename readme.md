# Team Profile Generator
This is a Node.js command-line application that generates an HTML webpage displaying summaries for each person on a software engineering team.

## User Story
As a manager, I want to generate a webpage that displays my team's basic info so that I have quick access to their emails and GitHub profiles.

## Acceptance Criteria
- The command-line application should accept user input.
- An HTML file is generated that displays a nicely formatted team roster based on user input.
- Clicking on an email address in the HTML should open the default email program and populate the TO field of the email with the address.
- Clicking on the GitHub username should open that GitHub profile in a new tab.
- When starting the application, the user should be prompted to enter the team manager’s name, employee ID, email address, and office number.
- After entering the team manager’s information, the user should be presented with a menu with the option to add an engineer or an intern or to finish building the team.
- When selecting the engineer option, the user should be prompted to enter the engineer’s name, ID, email, and GitHub username, and should then be taken back to the menu.
- When selecting the intern option, the user should be prompted to enter the intern’s name, ID, email, and school, and should then be taken back to the menu.
- When the user decides to finish building the team, the application should exit and the HTML should be generated.

## Prerequisites
- Node.js
- Inquirer

## Installation
To install the necessary dependencies, run the following command:

npm install

## Usage
To run the application, use the following command:

node index.js

Follow the prompts to enter information about each team member. Once all members have been entered, an HTML file named team.html will be generated in the output folder.

## License
This project is licensed under the MIT license.
