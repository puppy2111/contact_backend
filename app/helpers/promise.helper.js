const handlePromise = (promise) => {
    return promise
        .then((date) => [null, data])
        .catch((error) => [error, undefined]);
};

module.exports = handlePromise;