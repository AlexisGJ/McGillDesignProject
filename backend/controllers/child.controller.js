const Child = require('../models/child.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

//Create child
exports.child_create = function (req, res) {
    let child = new Child(
        {
            name: req.body.name,
            number: req.body.number,
        }
    );

    child.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Child Created successfully')
    })
};

//Get child by id
exports.child_details = function (req, res) {
    Child.findById(req.params.id, function (err, child) {
        if (err) return next(err);
        res.send(child);
    })
};

//Update child by id
exports.child_update = function (req, res) {
    Child.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, child) {
        if (err) return next(err);
        res.send('Child udpated.');
    });
};

exports.child_delete = function (req, res) {
    Child.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};