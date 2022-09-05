#!/usr/bin/env node

const fs = require('fs')

let readStr = fs.createReadStream('log.js', "utf8");

readStr.on("data", function (chunk) {
    let arr = chunk.split('\n');
    let countWin = 0;
    let countDefeat = 0;

    arr.forEach((str) => {
        if (str.trim() === "Победа") {
            countWin++
        } else {
            countDefeat++
        }

    });
    console.log(`Партий выгранно ${countWin}`);
    console.log(`Партий проигранно ${countDefeat}`);
    console.log(`Сыгранно партий  ${arr.length}`);
});