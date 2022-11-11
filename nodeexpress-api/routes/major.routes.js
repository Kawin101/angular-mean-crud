const express = require('express');
const app = express();
const majorExpressRoute = express.Router();
let MajorSchema = require('../model/major_model');

//get data all 
majorExpressRoute.route('/').get((req, res) => {
    MajorSchema.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//get data single 
majorExpressRoute.route('/major/:id').get((req, res) => {
    MajorSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// insert data 
majorExpressRoute.route('/add-major').post((req, res, next) => {
    MajorSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// delete data 
majorExpressRoute.route('/del-major/:id').delete((req, res) => {
    MajorSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

// update data 
majorExpressRoute.route('/update-major/:id').put((req, res) => {
    MajorSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data);
            console.log('Deleted Successfully!')
        }
    })
})

module.exports = majorExpressRoute;