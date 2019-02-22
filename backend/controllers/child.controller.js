const Child = require('../models/child.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the child controller!');
};

//Create child
exports.child_create = function (req, res, next) {
    let child = new Child(
        {
            name: req.body.name,
            collection_id: req.body.collection_id,
            active: req.body.active,
            range_min: req.body.range_min,
            range_max: req.body.range_max,
            location: req.body.location,
            sensorType: req.body.sensorType
        }
    );

    child.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Child Created successfully')
    })
};

//Get all children
exports.child_show_all = function (req, res) {
    Child.find(function (err, result) {
        if (err) return next(err);
        res.send(result);
    })
};

//Get child by id
exports.child_details = function (req, res, next) {
    Child.findById(req.params.id, function (err, child) {
        if (err) return next(err);
        res.send(child);
    })
};

//Update child by id
exports.child_update = function (req, res, next) {
    Child.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, child) {
        if (err) return next(err);
        res.send('Child udpated.');
    });
};

exports.child_delete = function (req, res, next) {
    Child.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};