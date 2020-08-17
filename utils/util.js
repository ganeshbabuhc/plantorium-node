const constants = require('./constants');
module.exports = {
    getUrl: (url) => {
        return `${constants.API_HOST}${url}?token=${constants.API_TOKEN}`;
    }
}