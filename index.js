#!/usr/bin/env node
const fetch = require('node-fetch');
const moment = require('moment');
const fs = require('fs');
const round = require('lodash.round');
moment.locale('en-us');

const nbUserToGenerate = Number(process.argv[2]) || 100;
const fileName = 'data.json';


const generateSign = () => (Math.random() > 0.5) ? 1: -1;
const generateLat = () => Math.random() * 90;
const generateLon = () => Math.random() * 180;

const generateRandomPosition  = () => {
    return {
        lat: round(generateSign() * generateLat(),6),
        lon: round(generateSign() * generateLon(),6)
    }
};

const persistedUsers = [];

console.log(`Fetching ${nbUserToGenerate} users`);
fetch(`https://randomuser.me/api/?results=${nbUserToGenerate}`)
    .then(res => res.json())
    .then(res => {
        res.results.forEach(user => {
            const persistedUser = {
                firstName: user.name.first,
                lastName: user.name.last,
                position: generateRandomPosition(),
                birthDay: moment(user.dob.date).format('L'),
            };
            persistedUsers.push(persistedUser);

        });

        fs.writeFile(fileName, JSON.stringify(persistedUsers), function(error) {
            if (error) {
                console.error("write error:  " + error.message);
            } else {
                console.log("Successful Write");
            }});
    });





