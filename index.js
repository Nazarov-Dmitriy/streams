#!/usr/bin/env node

const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '1 или 2 ',
});

let number = Math.floor(1 + Math.random() * (2 + 1 - 1));

rl.on('line', (line) => {
    if (+line.trim() === number) {
        fs.appendFile('log.js', 'Победа \n', function (err) {
            if (err) throw err;        });
        console.log('Победа');

    } else {
        fs.appendFile('log.js', 'Проигрыш \n', function (err) {
            if (err) throw err;
        });
        console.log('Проигрыш');
    }
    rl.close();
})