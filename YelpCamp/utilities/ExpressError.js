// This object is a simple object where we can store our Error Data
// We can set a message and a status code using this object
// It extends the basic functionality of JS Error class.

class ExpressError extends Error {
  constructor(message, statusCode) {
    super();
    this.message = message;
    this.statusCode = statusCode;
  }
}

module.exports = ExpressError;
