module.exports = (req, res, next) => {
    console.log();
    console.log('Middleware global.');
    console.log();

    next();
}