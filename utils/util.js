const constants = require('./constants');
module.exports = {
    getUrl: (url) => {
        const params = url.split('?');
        let newUrl = `${constants.API_HOST}${params[0]}?token=${constants.API_TOKEN}`;
        if(params[1]) {
            newUrl+=`&${params[1]}`;
        }
        return newUrl;
    }
}