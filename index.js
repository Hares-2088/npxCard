// index.js
import chalk from 'chalk';
import boxen from 'boxen';
import data from './lib/data.js'; // Importing data

// Function to display the output
const displayInfo = () => {
    // Constructing the output string with colored information
    const output = `
    ${chalk.blue('Name:')} ${chalk.white(data.name)}
    ${chalk.blue('Title:')} ${chalk.white(data.title)}
    ${chalk.blue('GitHub:')} ${chalk.white(data.github)}
    ${chalk.blue('URLs:')} ${chalk.white(data.urls.join(', '))}
    ${chalk.blue('Skills:')} ${chalk.white(data.skills.join(', '))}
    ${chalk.blue('Projects:')} ${chalk.white(data.projects.map(project => 
        `\n    - ${chalk.white(project.name)}: ${chalk.white(project.description)} (${chalk.white(project.link)})`
    ).join(''))}
    `;

    // Setting options for boxen
    const options = {
        borderStyle: 'round',
        borderColor: 'cyan',
        padding: 1,
        margin: 1,
        backgroundColor: '#555555'
    };

    // Printing the output using boxen for styled CLI output
    console.log(boxen(output, options));
};

// Exporting the displayInfo function as the default export
export default displayInfo;
