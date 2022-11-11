const express = require('express');
const app = express();
const schoolExpressRoute = express.Router();
let SchoolSchema = require('../model/school_model');

//get data all 
schoolExpressRoute.route('/').get((req, res) => {
    SchoolSchema.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//get data single 
schoolExpressRoute.route('/school/:id').get((req, res) => {
    SchoolSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// insert data 
schoolExpressRoute.route('/add-school').post((req, res, next) => {
    SchoolSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// delete data 
schoolExpressRoute.route('/del-school/:id').delete((req, res) => {
    SchoolSchema.findByIdAndRemove(req.params.id, (error, data) => {
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
schoolExpressRoute.route('/update-school/:id').put((req, res) => {
    SchoolSchema.findByIdAndUpdate(req.params.id, {
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

module.exports = schoolExpressRoute;