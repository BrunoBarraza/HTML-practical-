// const jokes = require('./jokes');
import { jokes } from './jokes';
import $ from 'jquery';
import fs from 'fs';

jokes.getOne()
    .then(joke => {
        // document.getElementById('joke').innerHTML = joke;
        // Use as Jquery
        $('#joke').text(joke);
    });

const copy = fs.readFileSync(__dirname + '/copyright.txt', 'utf-8');

$('#copy').text(copy);