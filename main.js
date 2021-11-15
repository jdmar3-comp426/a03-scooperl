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
*/

import {removeKeys} from './src/mild/mild_2.js';
let idrecord = { name: 'John Martin', title: 'Instructor', age: 41, password: 'supersecretpassword' };
let newrecord = removeKeys(idrecord, [ 'age', 'password' ]);
console.log(idrecord); 
console.log(newrecord);