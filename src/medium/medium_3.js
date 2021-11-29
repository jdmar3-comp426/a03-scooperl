import mpg_data from "./data/mpg_data.js";

/*
mpg_data is imported for you but that is for testing purposes only. All of the functions should use
a car_data param that is supplied as the first parameter.

As you write these functions notice how they could possibly be chained together to solve more complicated
queries.
 */

/**
 * @param {array} car_data - an instance of mpg_data that should be used for filtering.
 * @param minHorsepower {number}
 * @param minTorque {number}
 *
 * @return {array} An array of car objects with horsepower >= minHorsePower and torque >= minTorque
 * sorted by horsepower in descending order.
 *
 */
export function searchHighPower(car_data, minHorsepower, minTorque) {
    var filtered = car_data.filter((element) => (element["horsepower"] >= minHorsepower) & (element["torque"] >= minTorque) );
    return filtered.sort((a,b) => b.horsepower - a.horsepower);
}


/**
 * @param {array} car_data
 * @param minCity
 * @param minHighway
 *
 *
 * @return {array} An array of car objects with highway_mpg >= minHighway and city_mpg >= minCity
 * sorted by highway_mpg in descending order
 *
 */
export function searchMpg(car_data, minCity, minHighway) {
    var filtered = car_data.filter((element) => (element["highway_mpg"] >= minHighway) & (element["city_mpg"] >= minCity) );
    return filtered.sort((a,b) => b.highway_mpg - a.highway_mpg);
}


/**
 * Find all cars where 'id' contains the search term below.
 * Sort the results so that if the term appears earlier in the string
 * it will appear earlier in the list. Make sure searching and sorting ignores case.
 * @param car_data
 * @param searchTerm A string to that is used for searching
 * @returns {[]} array of cars
 */
export function searchName(car_data, searchTerm) {
    var filtered = car_data.filter(car => car.id.includes(searchTerm));
    var sorted= filtered.sort((a,b) => a.id.indexOf(searchTerm) - b.id.indexOf(searchTerm));
    return sorted;
}


/**
 * Find all cars made in the years asked for.
 * Sort the results by year in descending order.
 *
 * @param car_data
 * @param {number[]} years - array of years to be included in the results e.g. [2010, 2012]
 * @returns {[]} an array of car objects
 */
export function searchByYear(car_data, years) {
    var filtered = car_data;
/*
    for (var i=0; i<years.length; i++) {
        filtered = filtered.filter(car => car.year === years[i]);
        console.log(filtered);
    }
    ** Not as efficient as it calls the filter function for every year in the years array
*/
    var filtered = car_data.filter(function(car) {
        for (const element of years) {
            if (element === car.year) { return true; }
        } return false;
    })

    return filtered.sort((a,b) => b.years - a.years);
}
