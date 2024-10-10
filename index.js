import chalk from 'chalk';
import boxen from 'boxen';
import data from './lib/data.js'; // Importing data

// Function to display the output
const displayInfo = () => {
    // Constructing the output string with colored information
    const output = `
    ${chalk.cyan('Name:')} ${chalk.white(data.name)}
    ${chalk.cyan('Title:')} ${chalk.white(data.title)}
    ${chalk.cyan('GitHub:')} ${chalk.white(data.github)}
    ${chalk.cyan('LinkedIn:')} ${chalk.white(data.linkedin)}
    ${chalk.cyan('URLs:')} ${chalk.white(data.urls.join(', '))}
    ${chalk.cyan('Skills:')} ${chalk.white(data.skills.join(', '))}
    ${chalk.cyan('Projects:')} ${chalk.white(data.projects.map(project => 
        `\n    ${chalk.cyan('•')} ${chalk.white(project.name)}: ${chalk.white(project.description)} (${chalk.white(project.link)})`
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
