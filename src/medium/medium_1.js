import {variance} from "./data/stats_helpers.js";

/**
 * Gets the sum of an array of numbers.
 * @param array
 * @returns {*}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * prototype functions. Very useful
 */
export function getSum(array) {
    return array.reduce((previousValue, currentValue) => previousValue + currentValue);
}


/**
 * Calculates the median of an array of numbers.
 * @param {number[]} array
 * @returns {number|*}
 *
 * example:
 * let array = [3,2,5,6,2,7,4,2,7,5];
 * console.log(getMedian(array)); // 4.5
 */
export function getMedian(array) {
    array.sort((a,b) => a - b);
    var arrLength = array.length;
    if (arrLength % 2 === 0) {
        return (array[arrLength/2] + array[arrLength/2 - 1]) / 2;
    } else {
        return array[(arrLength -1)/2];
    }
}

/**
 * Calculates statistics (see below) on an array of numbers.
 * Look at the stats_helper.js file. It does variance which is used to calculate std deviation.
 * @param {number[]} array
 * @returns {{min: *, median: *, max: *, variance: *, mean: *, length: *, sum: *, standard_deviation: *}}
 *
 * example:
 * getStatistics([3,2,4,5,5,5,2,6,7])
 * {
  length: 9,
  sum: 39,
  mean: 4.333333333333333,
  median: 5,
  min: 2,
  max: 7,
  variance: 2.6666666666666665,
  standard_deviation: 1.632993161855452
 }
 */
export function getStatistics(array) {
    var arrLength = array.length;
    array.sort((a,b) => a - b);
    var min = array[0];
    var max = array[arrLength-1];
    var sum = getSum(array);
    var mean = sum/arrLength;
    var median = getMedian(array);
    var vari = variance(array, mean);
    var stdDev = Math.sqrt(vari);
    let statistics = {
        length: arrLength,
        sum: sum,
        mean: mean,
        median: median,
        min: min,
        max: max,
        variance: vari,
        standard_deviation: stdDev
    }
    return statistics;
}

