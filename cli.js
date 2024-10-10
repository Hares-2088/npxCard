#!/usr/bin/env node

import cowsay from 'cowsay';
import minimist from 'minimist';
import clear from 'clear';
import pkg from './package.json' assert { type: 'json' }; // Import the entire package.json as pkg
import displayInfo from './index.js'; // Importing the displayInfo function

clear();

const args = minimist(process.argv.slice(2));

if (args.version) {
    console.log(`Version: ${pkg.version}`); // Access the version property from the pkg object
    process.exit();
}

displayInfo(); // Call the function to display the information

// Use cowsay to display the joke
console.log(cowsay.say({
    text : "How do you comfort a JavaScript bug? You console it.",
    e : "oO",
    T : "U "
}));
