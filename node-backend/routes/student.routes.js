const exports = require('express');
const app = express();

const studensRoute = express.Router();
let Student = require('../model/Student');

// Add student
studensRoute.route('/add-student').post((req, res, next) => {
    Student.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data)
        }
    })
})

// Get all student
studensRoute.route('/').get((req, res) => {
    Student.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

// Get one person student
studensRoute.route('/read-student/:id').get((req, res) => {
    Student.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

// Update student
studensRoute.route('/update-student/:id').put((req, res, next) => {
    Student.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error);
        } else {
            res.json(data);
            console.log('Student is Updated Successfully');
        }
    })
})

// Delete student
studensRoute.route('/delete-student/:id').delete((req, res, next) => {
    Student.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            // 200 = OK!
            res.status(200).json({
                msg: data
            });
        }
    })
})

module.exports = studensRoute;