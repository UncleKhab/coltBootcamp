//This function basically replaces the need of "Try" , "Catch" inside a request
//It's a wrapper, so it's surrounds the request execution and throws errors(if it's the case);

module.exports = (fn) => {
  return function (req, res, next) {
    fn(req, res, next).catch(next);
  };
};
