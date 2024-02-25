require('dotenv').config();

/**
 * Middleware to validate API key sent in the request headers.
 * It checks for the presence of an 'x-api-key' header and compares its value
 * with an expected API key stored in environment variables. If the key is missing
 * or does not match, it responds with an appropriate error message and status code,
 * preventing further processing of the request. If the key is valid, it calls
 * `next()` to pass control to the next middleware or route handler.
 * 
 * @param {Object} req - The request object from the client. Used to access the request headers.
 * @param {Object} res - The response object. Used to send back a status code and message if the key is invalid.
 * @param {Function} next - A callback function to pass control to the next middleware or route handler.
 */
const validConnection = (req, res, next) => {

    const key = req.headers['x-api-auth'];
    
    if (!key) {
        return res.status(401).json({message: 'Unauthorized access'});
    }

    if (key != process.env.KEY){
        return res.status(403).json({message: 'Access denied'});
    }

    next();
}

module.exports = validConnection;