const dotenv = require('dotenv');

const envFound = dotenv.config();
if (envFound.error) {
    throw Error('cannot find');
}

module.exports = {
    port: process.env.PORT,
    mongoDBUrl: process.env.MONGODB_URL
};