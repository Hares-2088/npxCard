#!/usr/bin/env node

import cowsay from 'cowsay';
import minimist from 'minimist';
import clear from 'clear';
import chalk from 'chalk'; // Import chalk for coloring
import pkg from './package.json' assert { type: 'json' };
import displayInfo from './index.js';

clear();

const args = minimist(process.argv.slice(2));

if (args.version) {
    console.log(`Version: ${pkg.version}`);
    process.exit();
}

displayInfo();

const cowText = chalk.cyan("How do you comfort a JavaScript bug? You console it."); // Color the cow text

// Use cowsay to display the colored joke
console.log(cowsay.say({
    text: cowText, // Pass the colored text to cowsay
    e: "oO",
    T: "U ",
}));
