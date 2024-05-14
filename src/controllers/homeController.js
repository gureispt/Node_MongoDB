exports.homePag = (req, res) => {
    res.render('index');

};

exports.form = (req, res, next) => {
    res.send(req.body);
}