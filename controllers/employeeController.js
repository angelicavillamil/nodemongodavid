
require('../models/employee.model');
const express = require('express');
var router  = express.Router();
const mongoose = require('mongoose');
const Employee = mongoose.model('Employee');

router.get('/', (req, res) => {
   // res.json('texto de ejemplo');
   res.render("employee/employe", {
    viewTitle: 'Insertar empleado'
   })

});

router.post('/', (req,res) => {
    //console.log(req.body);
    insertRecord(req, res);
})

function insertRecord(req, res) {
    var employee = new Employee();

    employee.fullName = req.body.fullName;
    employee.email = req.body.email;
    employee.mobile = req.body.mobile;
    employee.city = req.body.city;
    employee.save((err, doc) => {
        if(!err) {
            res.redirect('employee/list');
        } else {
            console.log('Error al insertar ' + err);
        }
    });
}

router.get('/list', (req,res) => {
   //res.json('from list');
   Employee.find((err, docs) => {
    if(!err) {
        res.render('employee/list', {
            list: docs
        });
    } else {
        console.log('error ' + err);
    }
   });
})

module.exports = router;