/*import { sumToString } from "./src/mild/mild_1.js";
console.log(sumToString(13, 7));

import { getIncreasingArray } from "./src/mild/mild_1.js";
console.log(getIncreasingArray(1, 2));

import { maxAndMin } from "./src/mild/mild_1.js";
const numbers = [32, 542, 1, 52, 23, 98];
console.log(maxAndMin(numbers));

import {countArray} from './src/mild/mild_1.js'; 
console.log(countArray([ 13, 14, 16, 16, 17, 18, 16, 14, 21, 13 ]));

import {identifyVariable} from './src/mild/mild_2.js';
console.log(identifyVariable('purple'));

import {identifyArray} from './src/mild/mild_2.js';
console.log(identifyArray(['some', 3, [3, 4], false]));

import {removeKey} from './src/mild/mild_2.js';
let idrecord = { name: 'John Martin', title: 'Instructor', age: 41, password: 'supersecretpassword' };
removeKey(idrecord, 'password');
console.log(idrecord);

import {removeKeyNonDestructive} from './src/mild/mild_2.js';
let idrecord = { name: 'John Martin', title: 'Instructor', age: 41, password: 'supersecretpassword' };
let newrecord = removeKeyNonDestructive(idrecord, 'age');
console.log(idrecord);
console.log(newrecord);

import {removeKeys} from './src/mild/mild_2.js';
let idrecord = { name: 'John Martin', title: 'Instructor', age: 41, password: 'supersecretpassword' };
let newrecord = removeKeys(idrecord, [ 'age', 'password' ]);
console.log(idrecord); 
console.log(newrecord);


import {getSum} from './src/medium/medium_1.js';
console.log(getSum([14,8,5,7,7,5,2,7,5,3,47,9]));

import {getMedian} from './src/medium/medium_1.js';
let array = [1];
console.log(getMedian(array));

import {getStatistics} from './src/medium/medium_1.js';
console.log(getStatistics([14,8,5,7,7,5,2,7,5,3,47,9]));


import {allCarStats} from './src/medium/medium_2.js';
console.log(allCarStats);


import car_data from './src/medium/data/mpg_data.js';
import {searchHighPower} from './src/medium/medium_3.js';
console.log(searchHighPower(car_data, 630, 730));

import car_data from './src/medium/data/mpg_data.js';
import {searchByYear} from './src/medium/medium_3.js';
console.log(searchByYear(car_data, [ 2009, 2016]));

import car_data from './src/medium/data/mpg_data.js';
import {searchName} from './src/medium/medium_3.js';
console.log(searchName(car_data, 'Kia Soul'));

import {repeat} from './src/spicy/spicy_9.js';
repeat(console.log, 5, 'What up?');

import {tenTimesFifty} from './src/spicy/spicy_9.js';
console.log(tenTimesFifty());


import {everyEven} from './src/spicy/spicy_9.js';
console.log(everyEven([7, 1, 7, 1, 7, 1, 7], x => x === 3));

import {someEven} from './src/spicy/spicy_9.js';
console.log(someEven([5, 7, 1, 7, 1, 7, 1, 7], x => x === 7));

import {filter} from './src/spicy/spicy_9.js';
console.log(filter(['spectacle', 'pretend', 'orange', 'melt'], x => x[2] === 'e'));

import {anEvenIsOdd} from './src/spicy/spicy_9.js';
console.log(anEvenIsOdd([4, 5, 6, 7, 8, 9, 7]));
*/
import {hasExactly} from './src/spicy/spicy_9.js';
console.log(hasExactly([4, 5, 6, 7, 8, 9, 7], x => x === 7, 2));