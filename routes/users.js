var express = require('express');
var router = express.Router();
const userController = require('../controllers/users.controllers')
const { body, check } = require("express-validator");
/* GET users listing. */
router.get('/', userController.getAll);
router.post('/create', [body("Name")
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 5, max: 145 })
    .withMessage("Please enter name in min 5 char and max 145 char")
    .isAlpha()
    .withMessage("Name must be in char only"),
    body('mobile').isLength({ min: 10, max: 12 }).withMessage('please enter valid mobile number').isNumeric().withMessage("Please enter mobile in numbers only")
], userController.createUser);
router.post('/update/:id', userController.updateUser);
router.post('/delete/:id', userController.deleteUser)
module.exports = router;