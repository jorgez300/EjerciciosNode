const getAgePlugin = require("get-age")

const getAge = (birthdate) => {

    return (!birthdate) ? new Error('Error') : getAgePlugin(birthdate);

}

module.exports = {
    getAge
};